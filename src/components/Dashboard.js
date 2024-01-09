import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";

const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <div className="flex pt-12 h-full justify-center w-full">
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};
export default DashLayout;
