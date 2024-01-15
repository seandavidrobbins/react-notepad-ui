import logo from "../logo.png";
import SVG from "react-inlinesvg";

const DashHeader = () => {
  const content = (
    <header className="border-b border-white bg-black px-8 py-2">
      <div className="dash-header__container">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="menu-item hover:text-reactBlue text-white flex items-center hover:fill-reactBlue"
          >
            <img src={logo} alt="logo" className="w-[75px]" />
          </a>
          <a
            href="/dashboard"
            className="menu-item hover:text-reactBlue text-white flex items-center hover:fill-reactBlue"
          >
            <SVG
              src="/icons/gauge.svg"
              title="dashboard"
              className="fill-white hover:fill-reactBlue w-[30px] ml-2"
            />
          </a>
        </div>
        <nav className="dash-header__nav">{/* add nav buttons later */}</nav>
      </div>
    </header>
  );

  return content;
};
export default DashHeader;
