import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductInput = () => {
  return (
    <form className="">
      <div className="flex gap-5 p-2">
        <input
          className=" border rounded-md w-64 px-2"
          type="text"
          placeholder="Product name"
        />
        <input
          className=" border rounded-md w-24 px-2"
          type="number"
          placeholder="Price"
        />
        <Select defaultValue="kg">
          <SelectTrigger className="w-24 ">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kg">Kg</SelectItem>
            <SelectItem value="ltr">ltr</SelectItem>
          </SelectContent>
        </Select>
        <input
          className=" border rounded-md w-42 px-2"
          type="number"
          placeholder="WPS in gms(1to5)"
        />
        <input
          className=" border rounded-md w-42 px-2"
          type="number"
          placeholder="WPS in gms(6to8)"
        />
      </div>
      <div className="flex items-center justify-start my-8 gap-x-5">
        <button
          className={`px-4 py-2 bg-indigo-600 text-white rounded  cursor-pointer`}
        >
          Add
        </button>
        <button
          className={`px-4 py-2 bg-red-600 text-white rounded  cursor-pointer`}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductInput;
