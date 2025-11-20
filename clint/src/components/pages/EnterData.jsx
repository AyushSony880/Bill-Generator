import React from "react";
import AattendanceInput from "../common/AattendanceInput";
import Filter from "../common/Filter";
import Student from "../common/Student";

const EnterData = () => {
  return (
    <div className="bg-[#ffffff] rounded-lg shadow-sm w-[70%]  p-6">
      <h1 className="text-xl font-semibold py-5">Monthly record Table</h1>
      <AattendanceInput />
      <Filter />
      <section className="mt-5 p-5 border-t-2">
        <Student />
        <Student />
        <Student />
        <Student />
      </section>
    </div>
  );
};

export default EnterData;
