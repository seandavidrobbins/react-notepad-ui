import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "./usersApiSlice";
import EditUserForm from "./EditUserForm";

const EditUser = () => {
  const { id } = useParams();

  const user = useSelector((state) => selectUserById(state, id));

  const content = user ? (
    <EditUserForm user={user} />
  ) : (
    <p className="text-white text-3xl mt-12">Loading...</p>
  );

  return content;
};
export default EditUser;
