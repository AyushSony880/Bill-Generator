import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";

export const recordContext = createContext(null);
export const useRecord = () => useContext(recordContext);

export const RecordContextProvider = (props) => {
  const [record, setRecord] = useState("");
  const [reset, setReset] = useState(false);
  const [attendance, setAttendance] = useState({
    school_id: "",
    year: "",
    month: "",
    stu_1to5: "",
    stu_6to8: "",
  });

  const backendURL = "http://localhost:3000";

  const getRecordData = async () => {
    try {
      const res = await axios.get(`${backendURL}/monthlyRecord/get`);
      setRecord(res.data);
    } catch (error) {
      console.error("Error fetching record:", error);
    }
  };
  const addRecordData = async () => {
    try {
      const res = await axios.post(`${backendURL}/monthlyRecord/add`, {
        school_id: attendance.school_id,
        year: attendance.year,
        month: attendance.month,
        stu_1to5: attendance.stu_1to5,
        stu_6to8: attendance.stu_6to8,
      });
      await getRecordData()
      return { success: true, data: res.data };
    } catch (error) {
      console.log("Error save school:", error);
      const msg =
        error.response?.data?.message ||
        "Something went wrong while saving school";
      return { success: false, message: msg };
    }
  };
  useEffect(() => {
    getRecordData();
  }, []);

  const value = {
    record,
    setRecord,
    attendance,
    setAttendance,
    reset,
    setReset,
    getRecordData,
    addRecordData
  };
  return (
    <recordContext.Provider value={value}>
      {props.children}
    </recordContext.Provider>
  );
};
