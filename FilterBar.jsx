// src/components/FilterBar.jsx
import React from "react";
import Button from "./Button";

const FilterBar = ({ setFilter, filter }) => {
  const filters = ["all", "active", "completed"];

  return (
    <div className="flex justify-center gap-4 mt-6">
      {filters.map((f) => (
        <Button
          key={f}
          variant={filter === f ? "primary" : "secondary"}
          onClick={() => setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </Button>
      ))}
    </div>
  );
};

export default FilterBar;
