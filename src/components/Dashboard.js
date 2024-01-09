import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";

const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <div className="flex pt-8 h-full px-8">
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};
export default DashLayout;
