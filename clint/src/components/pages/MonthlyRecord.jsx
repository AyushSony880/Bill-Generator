import { useEffect } from "react";
import { useRecord } from "../../context/RecordContext";
import AattendanceInput from "../common/AattendanceInput";
import Student from "../common/Student";

const EnterData = () => {
  const { record, setRecord } = useRecord();
  console.log(record);
  

  return (
    <div className="bg-[#ffffff] rounded-lg shadow-sm w-[70%]  p-6">
      <h1 className="text-xl font-semibold py-5">Monthly record </h1>
      <AattendanceInput />
      <section className="mt-5 p-5 border-t-2">
        {Array.isArray(record) && record.length > 0 ? (
          record.map(({ id,month, year, stu_6to8, stu_1to5, school }) => (
            <Student
              key={id}
              id={id}
              month={month}
              year={year}
              stu_6to8={stu_6to8}
              stu_1to5={stu_1to5}
              school={school}
            />
          ))
        ) : (
          <h1>Empty....</h1>
        )}
      </section>
    </div>
  );
};

export default EnterData;
