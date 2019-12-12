import React, { Component } from "react";

class IdeaItem extends Component {
  render() {
    const { id, date, title, body, handleDelete, handleEdit } = this.props;
    return (
      <table className="col-2 table table-borderless text-capitalize m-2">
        <tbody>
          <tr className="col-12">
            <th>
              <strong>ID</strong>
            </th>
            <td>{id}</td>
          </tr>
          <tr className="col-12">
            <th>
              <strong>Date</strong>
            </th>
            <td>{date}</td>
          </tr>
          <tr className="col-12">
            <th>
              <strong>Idea</strong>
            </th>
            <td>{title}</td>
          </tr>
          <tr className="col-12">
            <th>
              <strong>Body</strong>
            </th>
            <td>{body}</td>
          </tr>

          <div className="idea-icon text-right">
            <span className="mx-2 text-success" onClick={handleEdit}>
              <i className="fas fa-pen"></i>
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
              <i className="fas fa-trash"></i>
            </span>
          </div>
        </tbody>
      </table>
    );
  }
}

export default IdeaItem;
