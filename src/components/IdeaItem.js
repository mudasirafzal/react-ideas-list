import React, { Component } from "react";

class IdeaItem extends Component {
  render() {
    const { id, date, title, body, handleDelete, handleEdit } = this.props;
    return (
      <table className="col-lg-2 col-md-4 col-sm-8 col-xs-12 mr-4 mb-4 text-left">
        <tbody className="col-lg-2 col-md-4 col-sm-8 col-xs-12 mr-4 mb-4">
          <tr>
            <th>
              <strong>ID</strong>
            </th>
            <td>{id}</td>
          </tr>
          <tr>
            <th>
              <strong>Date</strong>
            </th>
            <td>{date}</td>
          </tr>
          <tr>
            <th>
              <strong>Idea</strong>
            </th>
            <td>{title}</td>
          </tr>
          <tr>
            <th>
              <strong>Body</strong>
            </th>
            <td>{body}</td>
          </tr>

          <div className="idea-icon text-right flex flex-wrap">
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
