// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-10 p-4 text-center">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">About This App</h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        The Daily Health Tasks Tracker helps users stay consistent with daily wellness habits. 
        It was built using <span className="font-semibold">React, Vite, and Tailwind CSS</span> 
        to demonstrate component architecture, hooks, and responsive design.
      </p>
    </div>
  );
};

export default About;
