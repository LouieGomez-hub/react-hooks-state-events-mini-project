import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category })
    setText("")
    setCategory("Code")
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input 
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text} 
        />
      </label>
      <label>
        Category
        <select 
          onChange={(e) => setText(e.target.value)} 
          value={category}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;