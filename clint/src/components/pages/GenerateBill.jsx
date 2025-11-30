import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MonthYearPicker from "../common/MonthYearPicker.jsx";
import Invoice from "../common/Invoice.jsx";
import { useRecord } from "../../context/RecordContext.jsx";
import { useSchool } from "../../context/SchoolContext.jsx";
const GenerateBill = () => {
  const {
    attendance,
    setAttendance,
    handleGenerateBill,
    billRecord,
    setBillRecord,
    pdf,
    setPdf,
  } = useRecord();
  const { school } = useSchool();
  // console.log(attendance);
  const handleDownload = () => {
    if (!pdf.school_id || !pdf.month || !pdf.year) return;

    // Tumhara route params wale format ka hai:
    const url = `http://localhost:3000/monthlyRecord/preview/${pdf.school_id}/${pdf.month}/${pdf.year}/pdf`;

    window.open(url, "_blank");
  };

  return (
    <div
      div
      className=" flex flex-col justify-center items-center gap-10 w-[90%]"
    >
      <div className="bg-[#ffffff] rounded-lg shadow-sm w-[90%] h-full p-6">
        <h1 className="text-xl font-semibold py-5"> Generate Bill</h1>
        <section className=" flex items-center justify-start gap-10">
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
          <button
            onClick={handleGenerateBill}
            className="px-4 py-2 bg-green-600 text-white rounded my-10 cursor-pointer"
          >
            Generate
          </button>
        </section>
      </div>
      <div
        className={`bg-[#ffffff] relative rounded-lg shadow-sm p-5 pt-14 ${
          Object.keys(billRecord).length === 0 ? "hidden" : ""
        }`}
      >
        {Object.keys(billRecord).length !== 0 ? (
          <div className=" flex justify-center items-center gap-x-3 absolute top-2 right-5">
            <p
              onClick={handleDownload}
              className="p-2 border rounded-lg cursor-pointer bg-green-400 hover:bg-green-500 duration-300"
            >
              Download
            </p>
            <p
              onClick={() => {
                setPdf({ school_id: "", year: "", month: "" });
                setBillRecord({});
              }}
              className="px-2 rounded-full border cursor-pointer bg-red-200 hover:bg-red-400 duration-200"
            >
              X
            </p>
          </div>
        ) : (
          ""
        )}
        <Invoice billRecord={billRecord} />
      </div>
    </div>
  );
};

export default GenerateBill;
