// src/components/AddTaskForm.jsx
import React, { useState } from "react";
import Button from "./Button";

const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask({ text: task, completed: false });
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-6"
    >
      <input
        type="text"
        placeholder="Add a new health task... 🩺"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full sm:w-2/3 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </form>
  );
};

export default AddTaskForm;


