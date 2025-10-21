// src/components/TaskList.jsx
import React from "react";
import Button from "./Button";
import Card from "./Card";

const TaskList = ({ tasks, toggleComplete, deleteTask, filter }) => {
  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "active"
      ? tasks.filter((task) => !task.completed)
      : tasks.filter((task) => task.completed);

  if (filteredTasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No tasks found — add your first one! 🌱
      </p>
    );
  }

  return (
    <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredTasks.map((task, index) => (
        <Card key={index}>
          <div
            className={`flex justify-between items-center ${
              task.completed ? "opacity-60 line-through" : ""
            }`}
          >
            <p>{task.text}</p>
            <div className="flex gap-2">
              <Button
                variant={task.completed ? "secondary" : "primary"}
                onClick={() => toggleComplete(index)}
              >
                {task.completed ? "Undo" : "Done"}
              </Button>
              <Button variant="danger" onClick={() => deleteTask(index)}>
                Delete
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;


