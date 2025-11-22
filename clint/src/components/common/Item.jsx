const Item = ({ rate, unit, wps_1to5, wps_6to8, pps_1to5, pps_6to8, name }) => {
  return (
    <div className="flex items-center justify-start gap-2 mb-2 ">
      <div className="border-2 flex items-center  gap-10 px-5 py-2 rounded-md min-w-2xl  mr-5">
        <h3 className="font-semibold w-3xs">
          {name}{" "}
          <samp className="font-normal text-slate-500">
            ({rate}/{unit})
          </samp>
        </h3>
        <div className="flex items-center justify-center gap-x-10">
          {" "}
          <div>
            <p className="font-normal text-slate-500">
              WPS (1to5) - {wps_1to5}
            </p>
            <p className="font-normal text-slate-500">
              WPS (6to8) - {wps_6to8}
            </p>
          </div>
          <div>
            <p className="font-normal text-slate-500">
              PPS (1to5) - ₹{pps_1to5}
            </p>
            <p className="font-normal text-slate-500">
              PPS (6to8) - ₹{pps_6to8}
            </p>
          </div>
        </div>
      </div>
      <button
        className={`px-4 py-2 bg-green-600 text-white rounded  cursor-pointer`}
      >
        Edit
      </button>
      <button
        className={`px-4 py-2 bg-red-600 text-white rounded  cursor-pointer`}
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
