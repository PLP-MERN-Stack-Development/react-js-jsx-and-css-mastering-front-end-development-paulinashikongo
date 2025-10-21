// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import FilterBar from "../components/FilterBar";
import Card from "../components/Card";
import HealthData from "../components/HealthData"; // ✅ new import

const Home = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("healthTasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("healthTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Layout>
      <Card title="Daily Health Tasks Tracker 🩹">
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Keep track of your daily wellness goals — drink water, rest well, and
          move your body 💪
        </p>
        <AddTaskForm addTask={addTask} />
        <FilterBar filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          filter={filter}
        />
      </Card>

      {/* ✅ Display the Health API data */}
      <HealthData />
    </Layout>
  );
};

export default Home;
