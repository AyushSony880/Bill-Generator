import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MonthYearPicker from "@/components/ui/MonthYearPicker";
import "react-datepicker/dist/react-datepicker.css"; // best place for CSS
const GenerateBill = () => {
  return (
    <div className="bg-[#ffffff] rounded-lg shadow-sm w-[70%] h-full p-6">
      <h1 className="text-xl font-semibold py-5"> Generate Bill</h1>
      <section className=" flex items-center justify-start gap-10">
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
        <button className="px-4 py-2 bg-green-600 text-white rounded my-10 cursor-pointer">
          Generate
        </button>
      </section>
    </div>
  );
};

export default GenerateBill;
