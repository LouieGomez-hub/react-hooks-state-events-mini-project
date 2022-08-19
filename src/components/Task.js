import React from "react";

function Task({ task }) {
  console.log(task)

  function handleClick(event) {
    event.target.parentElement.remove()
  }
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
