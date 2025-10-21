// src/components/Card.jsx
import React from "react";

const Card = ({ title, children }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl 
      p-6 transition-all duration-300 transform hover:scale-[1.02]"
    >
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card;

