import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";

export const recordContext = createContext(null);
export const useRecord = () => useContext(recordContext);

export const RecordContextProvider = (props) => {
  const [record, setRecord] = useState("");
  const backendURL = "http://localhost:3000";

  const getRecordData = async () => {
    try {
      const res = await axios.get(`${backendURL}/monthlyRecord/get`);
        setRecord(res.data);
    
    } catch (error) {
      console.error("Error fetching record:", error);
    }
  };

  useEffect(() => {
    getRecordData();
  }, []);

  const value = { record, setRecord };
  return (
    <recordContext.Provider value={value}>{props.children}</recordContext.Provider>
  );
};
