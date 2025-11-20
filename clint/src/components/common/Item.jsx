import React from "react";
import Button from "./Button";

const Item = ({ itemName, price, unit }) => {
  return (
    <div className="flex items-center justify-start gap-2 mb-2 ">
      <div className="border-2 px-5 py-1 rounded-md min-w-2xl h-12 mr-5">
        <h3 className="font-semibold">
          {itemName}{" "}
          <samp className="font-normal text-slate-500">
            ({price}/{unit})
          </samp>
        </h3>
      </div>
      <Button value={"Edit"} color={"bg-green-600"} />
      <Button value={"Delete"} color={"bg-red-600"} />
    </div>
  );
};

export default Item;
