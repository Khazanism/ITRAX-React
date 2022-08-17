import Task from "./Task";

const TaskList = () => {
  return (
    <div className="task-list">
      <h2>Tasks List</h2>
      <Task title="Task One" status="Done" />
      <Task title="Task Two" status="Not Done" />
    </div>
  );
};

export default TaskList;
