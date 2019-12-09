import React, { Component } from "react";

class IdeaItem extends Component {
  render() {
    const { id, date, title, body, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{id}</h6>
        <h6>{date}</h6>
        <h6>{title}</h6>
        <h6>{body}</h6>
        <div className="idea-icon">
          <span class="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span class="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default IdeaItem;
