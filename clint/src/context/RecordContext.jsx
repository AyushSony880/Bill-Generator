import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";

export const recordContext = createContext(null);
export const useRecord = () => useContext(recordContext);

export const RecordContextProvider = (props) => {
  const [record, setRecord] = useState("");
  const [reset, setReset] = useState(false);
  const [editingId, setEditingId] = useState(null);
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
      await getRecordData();
      return { success: true, data: res.data };
    } catch (error) {
      console.log("Error save school:", error);
      const msg =
        error.response?.data?.message ||
        "Something went wrong while saving school";
      return { success: false, message: msg };
    }
  };
  const editMonthlyRecord = async () => {
    try {
      const res = await axios.put(`${backendURL}/monthlyRecord/edit`, {
        school_id: "",
        year: "",
        month: "",
        stu_1to5: attendance.stu_1to5,
        stu_6to8: attendance.stu_6to8,
        id: attendance.id,
      });

      await getRecordData();
      return { success: true, data: res.data };
    } catch (error) {
      console.log("Error save school:", error);
      const msg =
        error.response?.data?.message ||
        "Something went wrong while saving school";
      return { success: false, message: msg };
    }
  };
  const handleEdit = async (id, stu_1to5, stu_6to8) => {
    console.log(id);
    
    if (editingId !== id) {
      setEditingId(id);
      setAttendance({
        school_id: "",
        year: "",
        month: "",
        stu_1to5:stu_1to5,
        stu_6to8:stu_6to8,
        id: id,
      });
    } else {
      const result = await editMonthlyRecord();

      if (!result.success) {
        toast.error(result.message);
      } else {
        toast.success("Saved successfully!");
      }
      setEditingId(null);
      setAttendance({
        school_id: "",
        year: "",
        month: "",
        stu_1to5: "",
        stu_6to8: "",
      });
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
    addRecordData,
    editMonthlyRecord,
    handleEdit,
    editingId,
    setEditingId,
  };
  return (
    <recordContext.Provider value={value}>
      {props.children}
    </recordContext.Provider>
  );
};
