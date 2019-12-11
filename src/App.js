import React, { Component } from "react";
import IdeaInput from "./components/IdeaInput";
import IdeaList from "./components/IdeaList";
import { getIdeas } from "./services";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
class App extends Component {
  state = {
    ideas: [],
    id: "",
    title: "",
    field_created_date: "",
    body: "",
    editIdea: false
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
  handleSubmit = e => {
    e.preventDefault();
    const newIdea = {
      id: this.state.id,
      title: this.state.title,
      field_created_date: this.state.field_created_date,
      body: this.state.body
    };

    const updatedIdeas = [...this.state.ideas, newIdea];

    this.setState({
      ideas: updatedIdeas,
      title: "",
      field_created_date: "",
      body: "",
      id: "",
      editIdea: false
    });
    axios
      .post("https://5df0e9859df6fb00142bd4e3.mockapi.io/ideas", newIdea)
      .then(response => {
        console.log(response.data);
      });
  };
  handleDelete = id => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({
      ideas: filteredIdeas
    });
    axios
      .delete(`https://5df0e9859df6fb00142bd4e3.mockapi.io/ideas/${id}`)
      .then(response => {
        console.log(response.data);
      });
  };
  handleEdit = id => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
    const selectedIdea = this.state.ideas.find(idea => idea.id === id);

    this.setState({
      ideas: filteredIdeas,
      id: selectedIdea.id,
      title: selectedIdea.title,
      field_created_date: selectedIdea.field_created_date,
      body: selectedIdea.body,
      editIdea: true
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto nt-4">
            <h3 className="text-capitalize text-center">Idea Input</h3>
            <IdeaInput
              id={this.state.id}
              title={this.state.title}
              field_created_date={this.state.field_created_date}
              body={this.state.body}
              onChange={this.onHandleChange}
              handleSubmit={this.handleSubmit}
              editIdea={this.state.editIdea}
            />
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
