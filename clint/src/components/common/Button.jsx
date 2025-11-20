import React from "react";

const Button = ({ value, color }) => {
  return (
    <button
      className={`px-4 py-2 ${color} text-white rounded  cursor-pointer`}
    >
      {value}
    </button>
  );
};

export default Button;
