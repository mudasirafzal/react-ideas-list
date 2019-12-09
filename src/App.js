import React, { Component } from "react";
import IdeaInput from "./components/IdeaInput";
import IdeaList from "./components/IdeaList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state = {
    ideas: [],
    id: uuid(),
    title: "",
    date: "",
    body: "",
    editIdea: false
  };
  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleDateChange = e => {
    this.setState({
      date: e.target.value
    });
  };
  handleBodyChange = e => {
    this.setState({
      body: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newIdea = {
      id: this.state.id,
      title: this.state.title,
      date: this.state.date,
      body: this.state.body
    };
    console.log(newIdea);
    const updatedIdeas = [...this.state.ideas, newIdea];

    this.setState({
      ideas: updatedIdeas,
      title: "",
      date: "",
      body: "",
      id: uuid(),
      editIdea: false
    });
  };
  handleDelete = id => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({
      ideas: filteredIdeas
    });
  };
  handleEdit = id => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
    const selectedIdea = this.state.ideas.find(idea => idea.id == id);

    this.setState({
      ideas: filteredIdeas,
      id: selectedIdea.id,
      title: selectedIdea.title,
      date: selectedIdea.date,
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
              title={this.state.title}
              date={this.state.date}
              body={this.state.body}
              handleTitleChange={this.handleTitleChange}
              handleDateChange={this.handleDateChange}
              handleBodyChange={this.handleBodyChange}
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
