import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [textInput, setTextInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("Code")

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ textInput, categoryInput })
    setTextInput("")
    setCategoryInput("Code")
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input 
          onChange={(e) => setTextInput(e.target.value)}
          type="text"
          value={textInput} 
        />
      </label>
      <label>
        Category
        <select 
          onChange={(e) => setTextInput(e.target.value)} 
          value={categoryInput}>
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