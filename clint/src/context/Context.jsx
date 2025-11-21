import { createContext } from "react";

export const dataContext = createContext(null);

const name = "ayush";
const value = { name };

export const DataContextProvider = (props) => {
  return (
    <dataContext.Provider value={value}>{props.children}</dataContext.Provider>
  );
};
