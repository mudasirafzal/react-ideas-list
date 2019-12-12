import React, { useRef, useEffect } from "react";
export default ({
  title,
  date,
  body,
  chars_left,
  onChange,
  countChange,
  handleSubmit,
  editIdea
}) => {
  const titleRef = useRef(null);
  const focustextarea = false;
  useEffect(() => {
    titleRef.current.focus();
  }, []);
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 card card-body my-5">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group date" id="datetimepicker1">
            <input
              type="number"
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
            ref={titleRef}
          />
        </div>
        <div className="input-group">
          <textarea
            className="text-capitalize"
            placeholder="Body"
            value={body}
            onChange={e => {
              onChange(e);
              countChange(e);
            }}
            name="body"
            required
            maxlength="140"
          />

          <div className="counter input-group">
            {chars_left >= 1 && (
              <p className="show">
                {" "}
                Characters: &lt; 15 (Remaining {chars_left})
              </p>
            )}
          </div>
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
};
