import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const displayTasks = () => {
    return tasks.map((task) => {
      return <Task task={task} />
    })
  }
  return (
    <div className="tasks">
      {displayTasks()}
    </div>
  );
}

export default TaskList;
