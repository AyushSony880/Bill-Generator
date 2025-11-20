import School from "../common/School";
import SchoolInput from "../common/SchoolInput";

const ManageSchools = () => {
  return (
    <div className="bg-[#ffffff] rounded-lg shadow-sm w-[70%]  p-6">
      <h1 className="text-xl font-semibold py-5">Manage Schools</h1>
      <SchoolInput />
      <section>
        <h1 className="text-xl font-semibold py-5">Existing Schools</h1>
        <School schoolName={"St michael academy"}/>
        <School schoolName={"St michael academy"}/>
      </section>
    </div>
  );
};

export default ManageSchools;
