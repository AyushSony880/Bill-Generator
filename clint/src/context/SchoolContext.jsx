import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";

export const schoolContext = createContext(null);
export const useSchool = () => useContext(schoolContext);

export const SchoolContextProvider = (props) => {
  const [school, setSchool] = useState([]);
  const [newSchool, setNewSchool] = useState({
    schoolName: "",
    address: "",
  });

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
      return { success: true, data: res.data };
    } catch (error) {
      console.log("Error remove school:", error);
      const msg =
        error.response?.data?.message ||
        "Something went wrong while removing school";
      return { success: false, message: msg };
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
  };
  return (
    <schoolContext.Provider value={value}>
      {props.children}
    </schoolContext.Provider>
  );
};
