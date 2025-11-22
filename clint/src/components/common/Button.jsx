import React from "react";
import { useSchool } from "../../context/SchoolContext.jsx";
import { toast } from "react-toastify";

const Button = ({ id, value, color }) => {
  const { removeSchool } = useSchool();
  return (
    <button className={`px-4 py-2 ${color} text-white rounded  cursor-pointer`}>
      {value}
    </button>
  );
};


