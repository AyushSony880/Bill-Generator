import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "./Button";

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
        <Button value={"Add"} color={"bg-indigo-600"} />
        <Button value={"Cancel"} color={"bg-red-600"} />
      </div>
    </form>
  );
};

export default ProductInput;
