import { useNavigate } from "react-router-dom";
import SVG from "react-inlinesvg";
import { useSelector } from "react-redux";
import { selectUserById } from "./usersApiSlice";

const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  const navigate = useNavigate();

  if (user) {
    const handleEdit = () => navigate(`/dashboard/users/${userId}`);

    const userRolesString = user.roles.toString().replaceAll(",", ", ");

    const cellStatus = user.active ? "" : "table__cell--inactive";

    return (
      <tr className="table__row user border-2 border-white h-[3rem]">
        <td
          className={`table__cell ${cellStatus} text-white border-2 border-white text-center`}
        >
          {user.username}
        </td>
        <td
          className={`table__cell ${cellStatus} text-white border-2 border-white text-center`}
        >
          {userRolesString}
        </td>
        <td className={`table__cell ${cellStatus} text-white text-center`}>
          <button
            className="icon-button table__button ml-4"
            onClick={handleEdit}
          >
            <SVG src="/icons/pencil.svg" title="edit user" />
          </button>
        </td>
      </tr>
    );
  } else return null;
};
export default User;
