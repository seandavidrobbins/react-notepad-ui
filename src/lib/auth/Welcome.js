import { Link } from "react-router-dom";

const Welcome = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const content = (
    <section className="welcome">
      <p className="text-white">{today}</p>

      <h1 className="text-white">Welcome!</h1>

      <p className="text-white">
        <Link to="/dash/notes">View Notes</Link>
      </p>

      <p className="text-white">
        <Link to="/dash/users">View User Settings</Link>
      </p>
    </section>
  );

  return content;
};
export default Welcome;
