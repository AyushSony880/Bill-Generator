"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function MonthYearPicker({ onChange }) {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // 0–11
  const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

  const handleChange = (selectedMonth, selectedYear) => {
    if (selectedMonth && selectedYear) {
      const date = new Date(selectedYear, selectedMonth, 1);
      onChange && onChange(date);
    }
  };

  return (
    <div className="flex gap-4">
      
      {/* MONTH SELECT */}
      <Select
        onValueChange={(value) => {
          setMonth(value);
          handleChange(Number(value), year);
        }}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select Month" />
        </SelectTrigger>

        <SelectContent>
          {months.map((m, index) => {
            const disabled =
              year == currentYear && index > currentMonth;

            return (
              <SelectItem
                key={index}
                value={index.toString()}
                disabled={disabled}
              >
                {m}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      {/* YEAR SELECT */}
      <Select
        onValueChange={(value) => {
          setYear(value);
          handleChange(month, Number(value));
        }}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select Year" />
        </SelectTrigger>

        <SelectContent>
          {years.map((y) => (
            <SelectItem key={y} value={y.toString()}>
              {y}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

    </div>
  );
}
