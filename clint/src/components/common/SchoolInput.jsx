
import { useSchool } from "../../context/SchoolContext.jsx";
import { toast } from "react-toastify";

const SchoolInput = () => {
  const { newSchool, setNewSchool, addSchoolData } = useSchool();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addSchoolData();
    if (!result.success) {
      toast.error(result.message);
    } else {
      toast.success("Saved successfully!");
    }
    setNewSchool({
      schoolName: "",
      address: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        className=" border rounded-md  px-2 h-10"
        type="text"
        value={newSchool.schoolName}
        placeholder="School name"
        onChange={(e) => {
          setNewSchool({ ...newSchool, schoolName: e.target.value });
        }}
      />
      <input
        className=" border rounded-md  px-2 h-10"
        type="text"
        placeholder="Address"
        value={newSchool.address}
        onChange={(e) =>
          setNewSchool({ ...newSchool, address: e.target.value })
        }
      />
      <button
        className={`px-4 py-2 bg-indigo-600 text-white rounded  cursor-pointer`}
      >
        Add
      </button>
    </form>
  );
};

export default SchoolInput;
