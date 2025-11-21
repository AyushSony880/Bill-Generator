import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";

export const schoolContext = createContext(null);
export const useSchool = () => useContext(schoolContext);

export const SchoolContextProvider = (props) => {
  const [school, setSchool] = useState("");
  const backendURL = "http://localhost:3000";

  const getSchoolData = async () => {
    try {
      const res = await axios.get(`${backendURL}/school/get`);
      setSchool(res.data);
    } catch (error) {
      console.error("Error fetching school:", error);
    }
  };

  useEffect(() => {
    getSchoolData();
  }, []);

  const value = { school, setSchool };
  return (
    <schoolContext.Provider value={value}>{props.children}</schoolContext.Provider>
  );
};
