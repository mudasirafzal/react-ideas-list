import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import IdeaInput from "./components/IdeaInput";
import IdeaList from "./components/IdeaList";
import { getIdeas } from "./services";
import axios from "axios";
class App extends Component {
  state = {
    ideas: [],
    id: "",
    title: "",
    date: "",
    body: "",
    chars_left: 15,
    editIdea: false,
    showForm: false
  };
  async componentDidMount() {
    const ideas = await getIdeas();
    this.setState({ ideas });
  }
  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  onCountChange = e => {
    var input = e.target.value.length;
    this.setState({
      chars_left: 15 - input
    });
    console.log(this.state.chars_left);
  };
  handleSubmit = e => {
    e.preventDefault();
    const newIdea = {
      id: this.state.id,
      title: this.state.title,
      date: this.state.date,
      body: this.state.body
    };
    //const updatedIdeas = [...this.state.ideas, newIdea];

    this.setState({
      //ideas: updatedIdeas,
      title: "",
      date: "",
      body: "",
      id: "",
      editIdea: false,
      showForm: false
    });
    {
      this.state.editIdea
        ? axios
            .put(
              `https://5df0e9859df6fb00142bd4e3.mockapi.io/ideas/${this.state.id}`,
              newIdea
            )
            .then(response => {
              //console.log(response.data);
            })
        : axios
            .post("https://5df0e9859df6fb00142bd4e3.mockapi.io/ideas", newIdea)
            .then(response => {
              //console.log(response.data);
            });
    }
  };
  handleDelete = id => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({
      ideas: filteredIdeas
    });
    axios
      .delete(`https://5df0e9859df6fb00142bd4e3.mockapi.io/ideas/${id}`)
      .then(response => {
        //console.log(response.data);
      });
  };
  handleEdit = id => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
    const selectedIdea = this.state.ideas.find(idea => idea.id === id);

    this.setState({
      ideas: filteredIdeas,
      id: selectedIdea.id,
      title: selectedIdea.title,
      date: selectedIdea.date,
      body: selectedIdea.body,
      editIdea: true,
      showForm: true
    });
  };
  getIdeaForm() {
    this.setState({
      title: "",
      date: "",
      body: "",
      showForm: true
    });
    axios
      .get("https://5df0e9859df6fb00142bd4e3.mockapi.io/ideas/")
      .then(response => {
        //console.log(response.data);
      });
  }
  render() {
    //console.log(this.state.showForm);
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-8 col-xs-12 mx-auto nt-4">
            <button
              onClick={this.getIdeaForm.bind(this)}
              className="btn btn-block btn-primary mt-5 mb-5"
            >
              Get Idea
            </button>

            {this.state.showForm && (
              <IdeaInput
                id={this.state.id}
                title={this.state.title}
                date={this.state.date}
                body={this.state.body}
                chars_left={this.state.chars_left}
                onChange={this.onHandleChange}
                countChange={this.onCountChange}
                handleSubmit={this.handleSubmit}
                editIdea={this.state.editIdea}
              />
            )}
          </div>
          <div class="col-12 mx-auto nt-4 text-center">
            <IdeaList
              ideas={this.state.ideas}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
