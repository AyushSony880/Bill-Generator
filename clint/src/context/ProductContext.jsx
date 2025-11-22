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

  const removeProduct = async (id) => {
    try {
      const res = await axios.delete(`${backendURL}/product/remove/${id}`);
      getProductData();
      return { success: true, data: res.data };
    } catch (error) {
      console.log("Error remove item:", error);
      const msg =
        error.response?.data?.message ||
        "Something went wrong while removing item";
      return { success: false, message: msg };
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const value = { product, setProduct,removeProduct };
  return (
    <productContext.Provider value={value}>
      {props.children}
    </productContext.Provider>
  );
};
