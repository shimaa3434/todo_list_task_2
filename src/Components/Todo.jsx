import { useState, useContext } from "react";
import { themeContext } from "../App";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const { themeState, toggle } = useContext(themeContext);


  const addTask = () => {
    const newTask = {
      text: task,
    };
    setTodos([...todos, newTask]);
    setTask("");
  };

  return (
    <div className={`container position-relative vh-100 d-flex justify-content-center align-items-center flex-column m-auto ${themeState}`}>
      <button onClick={toggle} className={`btn btn-${themeState === "light" ? "dark" : "light"} position-absolute top-0 end-0`}>
          {themeState === "light" ? "dark" : "light"}
      </button>

      <h2 >To Do List</h2>
      <div className="d-flex gap-3 w-75">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-danger" onClick={addTask}>Add</button>
      </div>

      <ul className="list-group w-75 mt-3">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item list-group-item-warning text-start my-1 ">
            <span className="badge bg-primary rounded-pill me-2">{index + 1}</span>
              {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}