import React from "react";
import Button from "./Button";

const Item = ({ itemName, price, unit }) => {
  return (
    <div className="flex items-center justify-start gap-2 mb-2 ">
      <div className="border-2 flex items-center justify-start gap-10 px-5 py-2 rounded-md min-w-2xl  mr-5">
        <h3 className="font-semibold">
          {itemName}{" "}
          <samp className="font-normal text-slate-500">
            ({price}/{unit})
          </samp>
        </h3>
        <div>
          <p className="font-normal text-slate-500">WPS (1to5) - 200gms</p>
          <p className="font-normal text-slate-500">WPS (6to8) - 250gms</p>
        </div>
        <div>
          <p className="font-normal text-slate-500">PPS (1to5) - ₹2.40</p>
          <p className="font-normal text-slate-500">PPS (6to8) - ₹3.20</p>
        </div>
      </div>
      <Button value={"Edit"} color={"bg-green-600"} />
      <Button value={"Delete"} color={"bg-red-600"} />
    </div>
  );
};

export default Item;
