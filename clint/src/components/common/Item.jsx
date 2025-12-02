import { toast } from "react-toastify";
import { useProduct } from "../../context/ProductContext";

const Item = ({
  prod_id,
  rate,
  unit,
  wps_1to5,
  wps_6to8,
  pps_1to5,
  pps_6to8,
  name,
  hsn
}) => {
  const { removeProduct,handleEdit,editingId,setEditingId } =
    useProduct();
  
  return (
    <div className="flex items-center justify-start gap-2 mb-2 ">
      <div className="border-2 flex items-center  gap-0 px-5 py-2 rounded-md min-w-2xl  mr-5">
        <h3 className="font-semibold w-52">
          {name}{" "}
          <samp className="font-normal text-slate-500">
            ({rate}/{unit}) 
          </samp>
        </h3>
        <div className="flex items-center justify-center gap-x-10">
          {" "}
          <p className="text-slate-500">HSN-{hsn}</p>
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
        onClick={() => handleEdit(prod_id, rate, unit, wps_1to5, wps_6to8)}
        className={`px-4 py-2 bg-green-600 text-white rounded  cursor-pointer`}
      >
       {editingId === prod_id ? "Update" : "Edit"}

      </button>
      <button
        onClick={async () => {
          const result = await removeProduct(prod_id);
          if (!result.success) {
            toast.error(result.message);
          } else {
            toast.success("Deleted successfully!");
          }
        }}
        className={`px-4 py-2 bg-red-600 text-white rounded  cursor-pointer`}
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
