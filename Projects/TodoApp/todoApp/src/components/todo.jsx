import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() === "") return;
    setTasks([...tasks, { id: tasks.length, task: inputValue }]);
    setInputValue("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <div className="fs-1">What about Today!!</div>
      <div className="row">
        <div>
          <input
            className="p-2 border-2 border-primary"
            type="text"
            placeholder="Enter your tasks"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="m-4 p-2 btn btn-secondary" onClick={addTask}>
            Add
          </button>
        </div>
      </div>

      {tasks.map((task) => (
        <div key={task.id} className="row">
          <div className="col-4 fs-2"> {task.id}</div>
          <div className="col-4 fs-2"> {task.task}</div>
          <div className="col-4 ">
            <button className="btn btn-secondary" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
