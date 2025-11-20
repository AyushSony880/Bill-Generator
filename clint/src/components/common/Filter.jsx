import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MonthYearPicker from "./MonthYearPicker";

const Filter = () => {
  return (
    <div className="flex items-center justify-end">
      <p className="text-base font-semibold mr-5">Filter by :</p>
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
        
      </section>
    </div>
  );
};

export default Filter;
