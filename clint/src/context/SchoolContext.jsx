import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { useRecord } from "./RecordContext.jsx";
import { toast } from "react-toastify";

export const schoolContext = createContext(null);
export const useSchool = () => useContext(schoolContext);

export const SchoolContextProvider = (props) => {
  const [school, setSchool] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newSchool, setNewSchool] = useState({
    schoolName: "",
    address: "",
  });
  const { getRecordData } = useRecord();

  const backendURL = "http://localhost:3000";

  const getSchoolData = async () => {
    try {
      const res = await axios.get(`${backendURL}/school/get`);
      setSchool(res.data);
    } catch (error) {
      console.error("Error fetching school:", error);
    }
  };
  const addSchoolData = async () => {
    try {
      const res = await axios.post(`${backendURL}/school/add`, {
        school_name: newSchool.schoolName,
        address: newSchool.address,
      });
      getSchoolData();
      return { success: true, data: res.data };
    } catch (error) {
      console.log("Error save school:", error);
      const msg =
        error.response?.data?.message ||
        "Something went wrong while saving school";
      return { success: false, message: msg };
    }
  };
  const removeSchool = async (id) => {
    try {
      const res = await axios.delete(`${backendURL}/school/remove/${id}`);
      getSchoolData();
      getRecordData();
      return { success: true, data: res.data };
    } catch (error) {
      console.log("Error remove school:", error);
      const msg =
        error.response?.data?.message ||
        "Something went wrong while removing school";
      return { success: false, message: msg };
    }
  };
  const editSchool = async () => {
    try {
      const res = await axios.put(`${backendURL}/school/edit`, {
        school_id: newSchool.school_id,
        address: newSchool.address,
      });

      await getSchoolData();
      return { success: true, data: res.data };
    } catch (error) {
      console.log("Error save school:", error);
      const msg =
        error.response?.data?.message ||
        "Something went wrong while saving school";
      return { success: false, message: msg };
    }
  };

  const handleEdit = async (school_id, address) => {
    if (editingId !== school_id) {
      setEditingId(school_id);
      setNewSchool({
        schoolName: "",
        school_id: school_id,
        address: address,
      });
    } else {
      const result = await editSchool();

      if (!result.success) {
        toast.error(result.message);
      } else {
        toast.success("Saved successfully!");
      }
      setEditingId(null);
      setNewSchool({
        schoolName: "",
        address: "",
        school_id: "",
      });
    }
  };

  useEffect(() => {
    getSchoolData();
  }, []);

  const value = {
    school,
    setSchool,
    newSchool,
    setNewSchool,
    addSchoolData,
    removeSchool,
    editSchool,
    handleEdit,
    editingId,
    setEditingId,
  };
  return (
    <schoolContext.Provider value={value}>
      {props.children}
    </schoolContext.Provider>
  );
};
