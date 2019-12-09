import React, { Component } from "react";

class IdeaInput extends Component {
  render() {
    const {
      title,
      date,
      body,
      handleTitleChange,
      handleDateChange,
      handleBodyChange,
      handleSubmit,
      editIdea
    } = this.props;
    return (
      <div className="card card-body my-5">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Auto Generated"
              disabled
            />
          </div>
          <div className="input-group">
            <div className="input-group date" id="datetimepicker1">
              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                  <i className="fas fa-book"></i>
                </div>
              </div>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="Date"
                value={date}
                onChange={handleDateChange}
              />
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <textarea
              className="form-control text-capitalize"
              placeholder="Body"
              value={body}
              onChange={handleBodyChange}
            />
          </div>
          <button
            type="submit"
            className={
              editIdea
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3"
            }
          >
            {editIdea ? "Edit Idea" : "Add Idea"}
          </button>
        </form>
      </div>
    );
  }
}

export default IdeaInput;
