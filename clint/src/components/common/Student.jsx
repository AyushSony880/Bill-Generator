import React from "react";
import Button from "./Button";

const Student = () => {
  return (
    <div className="flex items-center justify-start gap-2 mb-2 ">
      <div className="border-2 px-5 py-1 rounded-md min-w-2xl  mr-5">
        <h3 className="font-semibold p-0.5">hhgiigiggigig </h3>
        <div className=" flex gap-3">
          <p className="text-gray-500 text-nowrap">June-2025 </p>
          <span>|</span>
          <p className="text-gray-500">Attendance (1 to 5) : 70 </p>{" "}
          <span>|</span>
          <p className="text-gray-500">Attendance (6 to 8) : 90 </p>{" "}
        </div>
      </div>
      <Button value={"Edit"} color={"bg-green-600"} />
      <Button value={"Generate Bill"} color={"bg-indigo-600"} />
    </div>
  );
};

export default Student;
