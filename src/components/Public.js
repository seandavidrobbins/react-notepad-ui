import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header className="border-b border-white bg-black px-8 py-2">
        <img src="./images/logo.png" alt="logo" className="w-[75px]" />
      </header>
      <main className="public__main p-8">
        <p className="text-white">Start takin' notes!</p>

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
