import { useState } from "react";
import "../assets/todoForm.css";

export default function TodoForm({ setData }) {
  const [title, setTitle] = useState("");
  const [bodyText, setBodyText] = useState("");

  async function handleAddTodo() {
    const res = await fetch("http://localhost:5125/api/Todo",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title, bodyText: bodyText })
      }
    )

    const newData = await res.json();
    setData(prev => [...prev, newData]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "") return;

    handleAddTodo(title, bodyText);
    setTitle("");
    setBodyText("");
  }

  return <form onSubmit={handleSubmit} className="form-container">
    <input type="text"
      className="form-input input-title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
    />
    <input type="text"
      className="form-input input-body"
      value={bodyText}
      onChange={(e) => setBodyText(e.target.value)}
      placeholder="Text"
    />
    <button type="submit" className="form-create-button">Create</button>
  </form>
}