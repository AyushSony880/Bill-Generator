import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProduct } from "../../context/ProductContext.jsx";
import { toast } from "react-toastify";

const ProductInput = () => {
  const {
    item,
    setItem,
    addProduct,
    editingId,
    setEditingId,
    editProduct
  } = useProduct();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
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
    } else {
      const result = await addProduct();
      if (!result.success) {
        toast.error(result.message);
      } else {
        toast.success("Saved successfully!");
      }
      setItem({
        product_name: "",
        rate: "",
        unit: "",
        wps_1to5: "",
        wps_6to8: "",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex gap-5 p-2">
        <input
          onChange={(e) => setItem({ ...item, product_name: e.target.value })}
          value={item.product_name}
          className={`border rounded-md w-64 px-2 ${editingId ? "hidden" : ""}`}
          type="text"
          placeholder="Product name"
        />
        <input
          onChange={(e) => setItem({ ...item, rate: e.target.value })}
          value={item.rate}
          className=" border rounded-md w-24 px-2"
          type="number"
          placeholder="Price"
        />
        <Select
          value={item.unit}
          onValueChange={(value) => setItem({ ...item, unit: value })}
        >
          <SelectTrigger className="w-24 ">
            <SelectValue placeholder="Units" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kg">Kg</SelectItem>
            <SelectItem value="ltr">ltr</SelectItem>
          </SelectContent>
        </Select>
        <input
          onChange={(e) => setItem({ ...item, wps_1to5: e.target.value })}
          value={item.wps_1to5}
          className=" border rounded-md w-42 px-2"
          type="number"
          placeholder="WPS in gms(1to5)"
        />
        <input
          onChange={(e) => setItem({ ...item, wps_6to8: e.target.value })}
          value={item.wps_6to8}
          className=" border rounded-md w-42 px-2"
          type="number"
          placeholder="WPS in gms(6to8)"
        />
      </div>
      <div className="flex items-center justify-start my-8 gap-x-5">
        <button
          type="submit"
          className={`px-4 py-2 bg-indigo-600 text-white rounded  cursor-pointer`}
        >
          {editingId ? "Update" : "Add"}
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setEditingId(null)
            setItem({
              product_name: "",
              rate: "",
              unit: "",
              wps_1to5: "",
              wps_6to8: "",
            });
          }}
          className={`px-4 py-2 bg-red-600 text-white rounded  cursor-pointer`}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductInput;
