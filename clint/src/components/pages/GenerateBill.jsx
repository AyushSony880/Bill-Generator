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
  const billRecord = {
    id: 75,
    school: "Ayush sony",
    month: "January",
    year: 2025,
    stu_1to5: 43,
    stu_6to8: 40,
    items: [
      {
        product_name: "Mustard Oil",
        unit: "kg",
        rate: 46,
        total_weight_1to5: "0.90",
        total_weight_6to8: "0.80",
        total_weight: "1.70",
        total_cost: "78.34",
      },
      {
        product_name: "Refined Oil",
        unit: "ltr",
        rate: 120,
        total_weight_1to5: "3.44",
        total_weight_6to8: "4.00",
        total_weight: "7.44",
        total_cost: "892.80",
      },
      {
        product_name: "Moong Dal",
        unit: "kg",
        rate: 95,
        total_weight_1to5: "6.88",
        total_weight_6to8: "7.20",
        total_weight: "14.08",
        total_cost: "1337.60",
      },
      {
        product_name: "Masoor Dal",
        unit: "kg",
        rate: 92,
        total_weight_1to5: "6.02",
        total_weight_6to8: "7.00",
        total_weight: "13.02",
        total_cost: "1197.84",
      },
      {
        product_name: "Chana Dal",
        unit: "kg",
        rate: 90,
        total_weight_1to5: "5.59",
        total_weight_6to8: "6.80",
        total_weight: "12.39",
        total_cost: "1115.10",
      },
      {
        product_name: "Tur Dal",
        unit: "kg",
        rate: 110,
        total_weight_1to5: "6.45",
        total_weight_6to8: "8.00",
        total_weight: "14.45",
        total_cost: "1589.50",
      },
      {
        product_name: "Salt",
        unit: "kg",
        rate: 18,
        total_weight_1to5: "12.90",
        total_weight_6to8: "14.00",
        total_weight: "26.90",
        total_cost: "484.20",
      },
      {
        product_name: "Onion",
        unit: "kg",
        rate: 40,
        total_weight_1to5: "10.75",
        total_weight_6to8: "12.00",
        total_weight: "22.75",
        total_cost: "910.00",
      },
      {
        product_name: "Potato",
        unit: "kg",
        rate: 30,
        total_weight_1to5: "8.60",
        total_weight_6to8: "10.40",
        total_weight: "19.00",
        total_cost: "570.00",
      },
      {
        product_name: "Tomato",
        unit: "kg",
        rate: 35,
        total_weight_1to5: "7.74",
        total_weight_6to8: "8.80",
        total_weight: "16.54",
        total_cost: "578.90",
      },
      {
        product_name: "Soybean Oil",
        unit: "ltr",
        rate: 130,
        total_weight_1to5: "3.44",
        total_weight_6to8: "4.40",
        total_weight: "7.84",
        total_cost: "1019.20",
      },
      {
        product_name: "Groundnut Oil",
        unit: "ltr",
        rate: 150,
        total_weight_1to5: "3.01",
        total_weight_6to8: "3.60",
        total_weight: "6.61",
        total_cost: "991.50",
      },
      {
        product_name: "Milk",
        unit: "ltr",
        rate: 52,
        total_weight_1to5: "4.30",
        total_weight_6to8: "5.60",
        total_weight: "9.90",
        total_cost: "514.80",
      },
      {
        product_name: "Curd",
        unit: "kg",
        rate: 60,
        total_weight_1to5: "3.87",
        total_weight_6to8: "4.80",
        total_weight: "8.67",
        total_cost: "520.20",
      },
      {
        product_name: "Besan",
        unit: "kg",
        rate: 85,
        total_weight_1to5: "6.02",
        total_weight_6to8: "7.20",
        total_weight: "13.22",
        total_cost: "1123.70",
      },
      {
        product_name: "Maida",
        unit: "kg",
        rate: 46,
        total_weight_1to5: "6.45",
        total_weight_6to8: "7.20",
        total_weight: "13.65",
        total_cost: "627.90",
      },
      {
        product_name: "mirch",
        unit: "kg",
        rate: 40,
        total_weight_1to5: "0.43",
        total_weight_6to8: "0.60",
        total_weight: "1.03",
        total_cost: "41.20",
      },
      {
        product_name: "dhaniya",
        unit: "kg",
        rate: 400,
        total_weight_1to5: "0.43",
        total_weight_6to8: "0.60",
        total_weight: "1.03",
        total_cost: "412.00",
      },
      {
        product_name: "masg",
        unit: "kg",
        rate: 45,
        total_weight_1to5: "0.52",
        total_weight_6to8: "0.80",
        total_weight: "1.32",
        total_cost: "59.22",
      },
      {
        product_name: "jhbvifebrf",
        unit: "kg",
        rate: 54,
        total_weight_1to5: "2.24",
        total_weight_6to8: "0.96",
        total_weight: "3.20",
        total_cost: "172.58",
      },
      {
        product_name: "hjcsbfvk",
        unit: "ltr",
        rate: 50,
        total_weight_1to5: "2.32",
        total_weight_6to8: "3.56",
        total_weight: "5.88",
        total_cost: "294.10",
      },
      {
        product_name: "asd",
        unit: "kg",
        rate: 20,
        total_weight_1to5: "0.47",
        total_weight_6to8: "0.84",
        total_weight: "1.31",
        total_cost: "26.26",
      },
    ],
    grand_total: 14556.942000000001,
  };
  const { attendance, setAttendance,handleGenerateBill } = useRecord();
  const { school } = useSchool();
  // console.log(attendance);

  return (
    <div
      div
      className=" flex flex-col justify-center items-center gap-10 w-[90%]"
    >
      <div className="bg-[#ffffff] rounded-lg shadow-sm w-[90%] h-full p-6">
        <h1 className="text-xl font-semibold py-5"> Generate Bill</h1>
        <section className=" flex items-center justify-start gap-10">
          {/* <Select>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="--Select School--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select> */}
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
          <button onClick={handleGenerateBill} className="px-4 py-2 bg-green-600 text-white rounded my-10 cursor-pointer">
            Generate
          </button>
        </section>
      </div>
      <div className="bg-[#ffffff] relative rounded-lg shadow-sm p-5 pt-14  ">
        {Object.keys(billRecord).length !== 0 ? (
          <p className="p-2 cursor-pointer hover:text-green-600 duration-200 absolute top-2 right-5">
            Download
          </p>
        ) : (
          ""
        )}
        <Invoice billRecord={billRecord} />
      </div>
    </div>
  );
};

export default GenerateBill;
