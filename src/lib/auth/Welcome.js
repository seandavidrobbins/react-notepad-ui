import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";

const Welcome = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const content = (
    <div className="w-full flex flex-col justify-center">
      <p className="text-white">{today}</p>
      <h1 className="py-4">Welcome!</h1>
      <Link
        to="/dashboard/notes"
        className="text-white w-full inline-flex items-center"
      >
        <span className="mr-4">View Notes</span>
        <SVG src="/icons/arrow-right.svg" title="view notes" />
      </Link>
      <Link
        to="/dashboard/users"
        className="text-white w-full inline-flex items-center"
      >
        <span className="mr-4">View User Settings</span>
        <SVG src="/icons/arrow-right.svg" title="View User Settings" />
      </Link>
    </div>
  );

  return content;
};
export default Welcome;
