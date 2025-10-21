// src/components/Button.jsx
import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, variant = "primary", onClick, type = "button" }) => {
  const baseStyles =
    "px-4 py-2 rounded font-semibold focus:outline-none transition-colors duration-300";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300",
    secondary: "bg-gray-300 text-gray-900 hover:bg-gray-400 focus:ring-2 focus:ring-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default Button;

