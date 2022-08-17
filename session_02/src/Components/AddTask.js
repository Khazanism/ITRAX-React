import { Fragment, useState } from "react";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,

      desc,
    });
    setTitle("");
    setDesc("");
  };

  return (
    <Fragment>
      <h2>Add Task</h2>
      <form className="add-task-from" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            id="title"
            placeholder="Add task title"
            onChange={handleTitle}
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Task Description</label>
          <input
            type="text"
            id="desc"
            placeholder="Add task description"
            onChange={handleDesc}
            value={desc}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default AddTask;
