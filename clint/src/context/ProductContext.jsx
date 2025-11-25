import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";

export const productContext = createContext(null);
export const useProduct = () => useContext(productContext);

export const ProductContextProvider = (props) => {
  const [product, setProduct] = useState("");
  const backendURL = "http://localhost:3000";
  const [editingId, setEditingId] = useState(null);
  const [item, setItem] = useState({
    product_name: "",
    rate: "",
    unit: "",
    wps_1to5: "",
    wps_6to8: "",
  });

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
  const addProduct = async () => {
    try {
      const res = await axios.post(`${backendURL}/product/add`, {
        product_name: item.product_name,
        rate: item.rate,
        unit: item.unit,
        wps_1to5: item.wps_1to5,
        wps_6to8: item.wps_6to8,
      });
      await getProductData();
      return { success: true, data: res.data };
    } catch (error) {
      console.log("Error save school:", error);
      const msg =
        error.response?.data?.message ||
        "Something went wrong while saving school";
      return { success: false, message: msg };
    }
  };
  const editProduct = async () => {
    try {

      const res = await axios.put(`${backendURL}/product/edit`, {
        prod_id: item.prod_id,
        rate: item.rate,
        unit: item.unit,
        wps_1to5: item.wps_1to5,
        wps_6to8: item.wps_6to8,
      });

      await getProductData();
      return { success: true, data: res.data };
    } catch (error) {
      console.log("Error save product:", error);
      const msg =
        error.response?.data?.message ||
        "Something went wrong while product school";
      return { success: false, message: msg };
    }
  };

  const handleEdit = async (prod_id, rate, unit, wps_1to5, wps_6to8) => {
    if (editingId !== prod_id) {
       setEditingId(prod_id);
      setItem({
        prod_id: prod_id,
        product_name: "",
        rate: rate,
        unit: unit,
        wps_1to5: wps_1to5,
        wps_6to8: wps_6to8,
      });
    } else {

      const result = await editProduct();

      if (!result.success) {
        toast.error(result.message);
      } else {
        toast.success("Saved successfully!");
      }
      setEditingId(null);
      setItem({
        product_name: "",
        rate: "",
        unit: "",
        wps_1to5: "",
        wps_6to8: "",
      });
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  const value = {
    product,
    setProduct,
    removeProduct,
    item,
    setItem,
    addProduct,
    editProduct,
    handleEdit,
    editingId,
    setEditingId,
  };
  return (
    <productContext.Provider value={value}>
      {props.children}
    </productContext.Provider>
  );
};
