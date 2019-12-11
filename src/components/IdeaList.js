import React, { Component } from "react";
import IdeaItem from "./IdeaItem";
class IdeaList extends Component {
  render() {
    const { ideas, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className=" text-capitalize text-center">Ideas List</h3>
        {ideas.map(idea => {
          return (
            <IdeaItem
              key={idea.id}
              id={idea.id}
              field_created_date={idea.field_created_date}
              title={idea.title}
              body={idea.body}
              handleDelete={() => handleDelete(idea.id)}
              handleEdit={() => handleEdit(idea.id)}
            />
          );
        })}
      </ul>
    );
  }
}

export default IdeaList;
