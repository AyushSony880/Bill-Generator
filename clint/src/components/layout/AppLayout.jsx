import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="bg-gray-50 min-h-dvh flex p-10 justify-center items-start gap-10 relative">
      <SideNav />
      <Outlet />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AppLayout;
