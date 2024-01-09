import { Link } from "react-router-dom";

const DashHeader = () => {
  const content = (
    <header className="border-b border-white bg-black px-8 py-2">
      <div className="dash-header__container">
        <Link to="/dashboard">
          <img src="./images/logo.png" alt="logo" className="w-[75px]" />
        </Link>
        <nav className="dash-header__nav">{/* add nav buttons later */}</nav>
      </div>
    </header>
  );

  return content;
};
export default DashHeader;
