import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>AddTask</button>
      <div>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            item={task}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
