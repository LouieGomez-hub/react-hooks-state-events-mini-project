import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function TaskList({ tasks }) {
  const displayTasks = () => {
    return tasks.map((task) => {
      return <Task key={uuidv4()} task={task} />
    })
  }
  return (
    <div className="tasks">
      {displayTasks()}
    </div>
  );
}

export default TaskList;
