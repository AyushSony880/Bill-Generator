import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="bg-[#ffffff] w-[25%] min-h-[calc(100dvh-80px)] sticky top-10 left-0 rounded-lg shadow-sm p-6">
      <h1 className="text-2xl font-bold mb-4"> Bill Generator</h1>
      <hr className="text-gray-300 mb-4" />
      <nav className="flex flex-col gap-2">
        <NavLink
          className={({ isActive }) =>
            "text-left p-2 rounded " + (isActive ? "bg-indigo-50" : "")
          }
          to="/"
        >
          Generate Bills
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "text-left p-2 rounded " + (isActive ? "bg-indigo-50" : "")
          }
          to="/manage-product"
        >
          Manage Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "text-left p-2 rounded " + (isActive ? "bg-indigo-50" : "")
          }
          to="/manage-schools"
        >
          {" "}
          Manage Schools
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "text-left p-2 rounded " + (isActive ? "bg-indigo-50" : "")
          }
          to="/enter-Data"
        >
          Student Entry
        </NavLink>
      </nav>
    </div>
  );
};

export default SideNav;
