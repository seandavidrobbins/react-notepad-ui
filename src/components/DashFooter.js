import { useNavigate, useLocation } from "react-router-dom";

const DashFooter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => navigate("/dash");

  let goHomeButton = null;
  if (pathname !== "/dash") {
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
    <footer className="absolute bottom-0 border-t border-white w-full p-8 bg-black">
      {goHomeButton}
      <p className="text-white">Current User:</p>
      <p className="text-white">Status:</p>
    </footer>
  );
  return content;
};
export default DashFooter;
