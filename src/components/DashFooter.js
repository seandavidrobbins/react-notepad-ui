import { useNavigate, useLocation } from "react-router-dom";
import logo from "../logo.png";

const DashFooter = ({ userId }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => navigate("/dashboard");

  let goHomeButton = null;
  if (pathname !== "/dashboard") {
    goHomeButton = (
      <button
        className="dash-footer__button icon-button"
        title="Home"
        onClick={onGoHomeClicked}
      >
        {/* Todo: Add Icon */}
      </button>
    );
  }

  const content = (
    <footer className="absolute bottom-0 border-t border-white w-full px-8 py-2 bg-black flex items-center justify-between">
      <p className="text-white">Current User:</p>
      <p className="text-white">Status:</p>
      {goHomeButton}

      <img src={logo} alt="logo" className="w-[75px]" />
    </footer>
  );
  return content;
};
export default DashFooter;
