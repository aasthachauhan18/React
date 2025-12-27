import { useState, useEffect } from "react";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editIndex, setEditIndex] = useState(null);

 
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updated = [...tasks];
      updated[editIndex].text = task;
      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: task, done: false }]);
    }

    setTask("");
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const editTask = (index) => {
    setTask(tasks[index].text);
    setEditIndex(index);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const deleteDoneTasks = () => {
    setTasks(tasks.filter((t) => !t.done));
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "done") return t.done;
    if (filter === "todo") return !t.done;
    return true;
  });

  return (
    <div className="container">

      <h2 className="title">TodoInput</h2>

      <div className="input-box">
        <input
          type="text"
          placeholder="New Todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="add-btn" onClick={addTask}>
          {editIndex !== null ? "Update task" : "Add new task"}
        </button>
      </div>

      <h2 className="title">TodoList</h2>

      <div className="filter-box">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "done" ? "active" : ""}
          onClick={() => setFilter("done")}
        >
          Done
        </button>
        <button
          className={filter === "todo" ? "active" : ""}
          onClick={() => setFilter("todo")}
        >
          Todo
        </button>
      </div>

      <div className="list">
        {filteredTasks.map((t, index) => (
          <div className="task" key={index}>
            <span className={t.done ? "done" : ""}>{t.text}</span>

            <div className="actions">
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleDone(index)}
              />

              <button className="edit" onClick={() => editTask(index)}>
                ✏️
              </button>

              <button className="delete" onClick={() => deleteTask(index)}>
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-buttons">
        <button className="delete-done" onClick={deleteDoneTasks}>
          Delete done tasks
        </button>

        <button className="delete-all" onClick={deleteAllTasks}>
          Delete all tasks
        </button>
      </div>
    </div>
  );
}

export default Todo;
