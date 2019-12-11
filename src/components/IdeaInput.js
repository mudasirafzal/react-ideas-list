import React from "react";

export default ({ title, date, body, onChange, handleSubmit, editIdea }) => (
  <div className="card card-body my-5">
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <div className="input-group date" id="datetimepicker1">
          <input
            type="text"
            className="text-capitalize"
            placeholder="Date"
            value={date}
            onChange={onChange}
            name="date"
            required
          />
        </div>
      </div>
      <div className="input-group">
        <input
          type="text"
          className="text-capitalize"
          placeholder="Title"
          value={title}
          onChange={onChange}
          name="title"
          required
        />
      </div>
      <div className="input-group">
        <textarea
          className="text-capitalize"
          placeholder="Body"
          value={body}
          onChange={onChange}
          name="body"
          required
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
