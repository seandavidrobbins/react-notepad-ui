import logo from "../logo.png";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";

const PublicHeader = () => {
  const content = (
    <header className="border-b border-white bg-black px-8 py-2 flex items-center justify-between">
      <Link to="/" className="text-white">
        <img src={logo} alt="logo" className="w-[75px]" />
      </Link>
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
    </header>
  );

  return content;
};
export default PublicHeader;
