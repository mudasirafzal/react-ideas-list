import React, { Component } from "react";
import IdeaItem from "./IdeaItem";
class IdeaList extends Component {
  render() {
    const { ideas, handleDelete, handleEdit } = this.props;
    return (
      <div>
        {ideas.map(idea => {
          return (
            <IdeaItem
              key={idea.id}
              id={idea.id}
              date={idea.date}
              title={idea.title}
              body={idea.body}
              handleDelete={() => handleDelete(idea.id)}
              handleEdit={() => handleEdit(idea.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default IdeaList;
