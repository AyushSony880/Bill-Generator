import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MonthYearPicker from "./MonthYearPicker";
import { useSchool } from "../../context/SchoolContext.jsx";
import { useRecord } from "../../context/RecordContext.jsx";
import { toast } from "react-toastify";

const AattendanceInput = () => {
  const { school } = useSchool();
  const { attendance, setAttendance, setReset, addRecordData } = useRecord();

  // console.log(attendance);

  const handleSubmit = async () => {
    const result = await addRecordData();
    if (!result.success) {
      console.log(result);
      
      toast.error(result.message);
    } else {
      toast.success("Saved successfully!");
    }
     setReset((prev) => (prev = !prev));
    setAttendance({
      school_id: "",
      year: "",
      month: "",
      stu_1to5: "",
      stu_6to8: "",
    });
  };

  return (
    <div>
      <section className=" flex items-center justify-start gap-5">
        <Select
          value={attendance.school_id?.toString()}
          onValueChange={(value) =>
            setAttendance({ ...attendance, school_id: value })
          }
        >
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="--Select School--" />
          </SelectTrigger>
          <SelectContent>
            {school &&
              school.map(({ school_name, school_id }) => (
                <SelectItem key={school_id} value={school_id.toString()}>
                  {school_name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <MonthYearPicker />
        <input
          onChange={(e) =>
            setAttendance({ ...attendance, stu_1to5: e.target.value })
          }
          value={attendance.stu_1to5}
          className=" border rounded-md w-36  px-2 h-9"
          type="number"
          placeholder="Student (1to5)"
        />
        <input
          value={attendance.stu_6to8}
          className=" border rounded-md w-36 px-2 h-9"
          type="number"
          placeholder="Student (6to8)"
          onChange={(e) =>
            setAttendance({ ...attendance, stu_6to8: e.target.value })
          }
        />
      </section>
      <button
        onClick={handleSubmit}
        className="px-4 mr-5 py-2 bg-green-600 text-white rounded my-10 cursor-pointer"
      >
        Save
      </button>
      <button
        onClick={() => {
          setReset((prev) => (prev = !prev));
          setAttendance({
            school_id: "",
            year: "",
            month: "",
            stu_1to5: "",
            stu_6to8: "",
          });
        }}
        className="px-4 py-2 bg-red-600 text-white rounded my-10 cursor-pointer"
      >
        Cancel
      </button>
    </div>
  );
};

export default AattendanceInput;
