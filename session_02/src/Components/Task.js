import React, { Fragment } from "react";

const Task = (props) => {
  return (
    <Fragment>
      <div className="task">
        <p>{props.title}</p>
        <strong>{props.status}</strong>
      </div>
    </Fragment>
  );
};

export default Task;
