import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";

export const productContext = createContext(null);
export const useProduct = () => useContext(productContext);

export const ProductContextProvider = (props) => {
  const [product, setProduct] = useState("");
  const backendURL = "http://localhost:3000";

  const getProductData = async () => {
    try {
      const res = await axios.get(`${backendURL}/product/get`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const value = { product, setProduct };
  return (
    <productContext.Provider value={value}>{props.children}</productContext.Provider>
  );
};
