
import { useSchool } from "../../context/SchoolContext.jsx";
import { toast } from "react-toastify";

const School = ({  school_id, schoolName, address }) => {
  const { removeSchool,handleEdit,editingId } = useSchool();
  return (
    <div className="flex items-center justify-start gap-2 mb-2 ">
      <div className="border-2 px-5 py-1 rounded-md min-w-2xl  mr-5">
        <h3 className="font-semibold">{schoolName} </h3>

        <p className="text-gray-500 text-nowrap">Address- {address} </p>
      </div>

      <button
        onClick={() => handleEdit(school_id,address)}
        className={`px-4 py-2 bg-green-600 text-white rounded  cursor-pointer`}
      >
       {editingId === school_id ? "Update" : "Edit"}
      </button>

      <button
        onClick={async () => {
          const result = await removeSchool( school_id);
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

export default School;
