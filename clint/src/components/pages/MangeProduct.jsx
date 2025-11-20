import React from "react";
import ProductInput from "../common/ProductInput";
import Item from "../common/Item";

const MangeProduct = () => {
  return (
    <div className="bg-[#ffffff] rounded-lg shadow-sm w-[70%]  p-6">
      <h1 className="text-xl font-semibold py-5">Mange Product</h1>
      <ProductInput />
      <section className=" p-5 border-t-2">
        <Item unit={"kg" } price={56} itemName={"Rice"} />
        <Item unit={"kg" } price={56} itemName={"Rice"} />
        <Item unit={"kg" } price={56} itemName={"Rice"} />    
      </section>
    </div>
  );
};

export default MangeProduct;
