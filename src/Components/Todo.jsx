import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);


  const addTask = () => {
    const newTask = {
      text: task,
    };
    setTodos([...todos, newTask]);
    setTask("");
  };

  return (
    <div className="text-center m-auto" >
      <h2 >To Do List</h2>
      <div className="d-flex gap-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-danger" onClick={addTask}>Add</button>
      </div>

      <ul className="list-group mt-3">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item list-group-item-warning text-start">
            <span className="badge bg-primary rounded-pill me-2">{index + 1}</span>
              {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}