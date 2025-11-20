import React from "react";
import Button from "./Button";

const SchoolInput = () => {
  return (
    <form className="flex flex-col gap-5">
      <input
        className=" border rounded-md  px-2 h-10"
        type="text"
        placeholder="School name"
      />
      <input
        className=" border rounded-md  px-2 h-10"
        type="text"
        placeholder="Address"
      />
      <input
        className=" border rounded-md  px-2 h-10"
        type="number"
        placeholder="Phone"
      />
      <Button value={"Add"} color={"bg-indigo-600"} />
    </form>
  );
};

export default SchoolInput;
