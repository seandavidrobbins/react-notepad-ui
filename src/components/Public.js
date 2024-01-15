import { Link } from "react-router-dom";
import logo from "../logo.png";
import SVG from "react-inlinesvg";

const Public = () => {
  const content = (
    <section className="public">
      <header className="border-b border-white bg-black px-8 py-2 flex items-center justify-between">
        <img src={logo} alt="logo" className="w-[75px]" />
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
      </header>
      <main className="public__main p-8">
        <h1 className="text-white">Start takin' notes!</h1>

        <br />
      </main>
      <footer className="absolute bottom-0 border-t border-white w-full p-8 bg-black">
        <Link to="/login" className="text-white">
          User Login
        </Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
