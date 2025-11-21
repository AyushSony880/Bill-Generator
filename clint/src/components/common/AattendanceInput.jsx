import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MonthYearPicker from "./MonthYearPicker";
import { useContext } from "react";
import { dataContext } from "../../context/Context";

const AattendanceInput = () => {
  const { name } = useContext(dataContext)
  console.log(name);
  
  return (
    <div>
      <section className=" flex items-center justify-start gap-5">
        <Select>
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="--Select School--" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <MonthYearPicker />
        <input
          className=" border rounded-md w-36  px-2 h-9"
          type="number"
          placeholder="Student (1to5)"
        />
        <input
          className=" border rounded-md w-36 px-2 h-9"
          type="number"
          placeholder="Student (6to8)"
        />
      </section>
      <button className="px-4 py-2 bg-green-600 text-white rounded my-10 cursor-pointer">
        Save
      </button>
    </div>
  );
};

export default AattendanceInput;
