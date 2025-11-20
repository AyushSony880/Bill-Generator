import React from "react";
import Button from "./Button";

const School = ({ schoolName, address, phone }) => {
  return (
    <div className="flex items-center justify-start gap-2 mb-2 ">
      <div className="border-2 px-5 py-1 rounded-md min-w-2xl  mr-5">
        <h3 className="font-semibold">{schoolName} </h3>
        <div className=" flex gap-3">
          <p className="text-gray-500 text-nowrap">Adds- bettiah </p>
          <span>|</span>
          <p className="text-gray-500">Mob- 123456789 </p>{" "}
        </div>
      </div>
      <Button value={"Edit"} color={"bg-green-600"} />
      <Button value={"Delete"} color={"bg-red-600"} />
    </div>
  );
};

export default School;
