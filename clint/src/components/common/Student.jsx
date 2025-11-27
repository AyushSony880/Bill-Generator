import { useRecord } from "../../context/RecordContext.jsx";
import { useNavigate } from "react-router";
const Student = ({
  school_id,
  id,
  year,
  stu_6to8,
  stu_1to5,
  school,
  month,
}) => {
  const { handleEdit, editingId, setAttendance, attendance ,handleGenerateBill} = useRecord();
  console.log(attendance);
const navigate =useNavigate()
  return (
    <div className="flex items-center justify-start gap-2 mb-2 ">
      <div className="border-2 px-5 py-1 rounded-md min-w-2xl  mr-5">
        <h3 className="font-semibold p-0.5">{school}</h3>
        <div className=" flex gap-3">
          <p className="text-gray-500 text-nowrap">
            {month}-{year}{" "}
          </p>
          <span>|</span>
          <p className="text-gray-500">
            Attendance (1 to 5) : {stu_1to5}{" "}
          </p>{" "}
          <span>|</span>
          <p className="text-gray-500">
            Attendance (6 to 8) : {stu_6to8}{" "}
          </p>{" "}
        </div>
      </div>
      <button
        onClick={() => handleEdit(id, stu_1to5, stu_6to8)}
        className={`px-4 py-2 bg-green-600 text-white rounded  cursor-pointer`}
      >
        {editingId === id ? "Update" : "Edit"}
      </button>
      <button
        onClick={() =>
        {
          // setAttendance({
          //   school_id,
          //   year,
          //   month,
          // })
          handleGenerateBill(school_id,month,year)
          navigate("/")
        }
        }
        className={`px-4 py-2 bg-indigo-600 text-white rounded  cursor-pointer`}
      >
        Generate Bill
      </button>
    </div>
  );
};

export default Student;
