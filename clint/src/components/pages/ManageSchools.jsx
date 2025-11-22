import { useSchool } from "../../context/SchoolContext";
import School from "../common/School";
import SchoolInput from "../common/SchoolInput";

const ManageSchools = () => {
  const { school, error } = useSchool();

  return (
    <div className="bg-[#ffffff] rounded-lg shadow-sm w-[70%]  p-6">
      <h1 className="text-xl font-semibold py-5">
        Manage Schools{" "}
        
      </h1>
      <SchoolInput />
      <section>
        <h1 className="text-xl font-semibold py-5">Existing Schools </h1>
        {Array.isArray(school) && school.length > 0 ? (
          school.map(({ school_name, address }) => (
            <School schoolName={school_name} address={address} />
          ))
        ) : (
          <h1>Empty....</h1>
        )}
      </section>
    </div>
  );
};

export default ManageSchools;
