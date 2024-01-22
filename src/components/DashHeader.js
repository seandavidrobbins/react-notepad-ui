import { useEffect } from "react";
import logo from "../logo.png";
import SVG from "react-inlinesvg";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useSendLogoutMutation } from "../lib/auth/authApiSlice";

const DASH_REGEX = /^\/dash(\/)?$/;
const NOTES_REGEX = /^\/dash\/notes(\/)?$/;
const USERS_REGEX = /^\/dash\/users(\/)?$/;

const DashHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  if (isLoading) return <p>Logging Out...</p>;

  if (isError) return <p>Error: {error.data?.message}</p>;

  let dashClass = null;
  if (
    !DASH_REGEX.test(pathname) &&
    !NOTES_REGEX.test(pathname) &&
    !USERS_REGEX.test(pathname)
  ) {
    dashClass = "dash-header__container--small";
  }

  const logoutButton = (
    <button className="icon-button" title="Logout" onClick={sendLogout}>
      <SVG
        src="/icons/arrow-right.svg"
        title="logout"
        className="fill-white hover:fill-reactBlue ml-2"
      />
    </button>
  );

  const content = (
    <header className="border-b border-white bg-black px-8 py-2">
      <div className="dash-header__container">
        <div className={`flex items-center justify-between ${dashClass}`}>
          <Link
            to="/"
            className="menu-item hover:text-reactBlue text-white flex items-center hover:fill-reactBlue"
          >
            <img src={logo} alt="logo" className="w-[75px]" />
          </Link>
          <div className="flex flex-row">
            <Link
              to="/dashboard"
              className="menu-item hover:text-reactBlue text-white flex items-center hover:fill-reactBlue"
            >
              <SVG
                src="/icons/gauge.svg"
                title="dashboard"
                className="fill-white hover:fill-reactBlue w-[30px] ml-2"
              />
            </Link>
            {logoutButton}
          </div>
        </div>
      </div>
    </header>
  );

  return content;
};
export default DashHeader;
