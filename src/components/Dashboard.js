import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";

const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <div className="dash-container p-8">
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};
export default DashLayout;
