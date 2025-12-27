import React, { useEffect, useState } from "react";

export default function SimpleTodo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);


  useEffect(() => {
      const saved = JSON.parse(localStorage.getItem(""));
      if (saved) setList(saved);
    }, []);
  
    
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(list));
    }, [list]);
  

  const addTask = () => {
    if (task.trim() === "") return;
    setList([...list, task]);
    setTask("");
  };

  return (
    <div className="text-center p-5">
      <h2>Simple Todo App</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        
      />

      <button
        onClick={addTask}
        
      >
        Add
      </button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
