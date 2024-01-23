import logo from "../logo.png";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";

const PublicFooter = () => {
  const content = (
    <footer className="absolute bottom-0 border-t border-white w-full px-8 py-2 bg-black flex items-center justify-between">
      <Link to="/login" className="text-white">
        User Login
      </Link>
      <img src={logo} alt="logo" className="w-[75px]" />
    </footer>
  );

  return content;
};
export default PublicFooter;
