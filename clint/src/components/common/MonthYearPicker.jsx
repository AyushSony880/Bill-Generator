"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useRecord } from "../../context/RecordContext.jsx";
import { useEffect, useState } from "react";

export default function MonthYearPicker() {
  const { editingId, setAttendance, reset } = useRecord();
  const [month, setmonth] = useState("");
  const [year, setyear] = useState("");
  // console.log(month, year);

  const handleFn = () => {
    setAttendance((prev) => ({
      ...prev,
      month: month,
      year: year,
    }));
  };
  useEffect(() => {
    handleFn();
  }, [month, year]);

  useEffect(() => {
    setmonth((prev) => (prev = ""));
    setyear((prev) => (prev = ""));
  }, [reset]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // 0–11
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

  return (
    <div className={`${editingId ? "hidden" : ""} flex gap-4`}>
      {/* YEAR SELECT */}
      <Select
        value={year}
        onValueChange={(value) => {
          setyear(value);
        }}
      >
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Select Year" />
        </SelectTrigger>

        <SelectContent>
          {years.map((y) => (
            <SelectItem key={y} value={y}>
              {y}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {/* MONTH SELECT */}
      <Select
        value={month}
        onValueChange={(value) => {
          setmonth(value);
        }}
      >
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Select Month" />
        </SelectTrigger>

        <SelectContent>
          {months.map((m, index) => {
            const disabled = year == currentYear && index > currentMonth;
            return (
              <SelectItem key={index} value={m} disabled={disabled}>
                {m}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
