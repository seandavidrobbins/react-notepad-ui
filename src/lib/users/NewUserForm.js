import { useState, useEffect } from "react";
import { useAddNewUserMutation } from "./usersApiSlice";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../config/roles";
import SVG from "react-inlinesvg";

const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const NewUserForm = () => {
  const [addNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [roles, setRoles] = useState(["Employee"]);

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    if (isSuccess) {
      setUsername("");
      setPassword("");
      setRoles([]);
      navigate("/dashboard/users");
    }
  }, [isSuccess, navigate]);

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const onRolesChanged = (e) => {
    const values = Array.from(
      e.target.selectedOptions, //HTMLCollection
      (option) => option.value
    );
    setRoles(values);
  };

  const canSave =
    [roles.length, validUsername, validPassword].every(Boolean) && !isLoading;

  const onSaveUserClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await addNewUser({ username, password, roles });
    }
  };

  const options = Object.values(ROLES).map((role) => {
    return (
      <option key={role} value={role}>
        {" "}
        {role}
      </option>
    );
  });

  const errClass = isError ? "errmsg" : "offscreen";
  const validUserClass = !validUsername ? "form__input--incomplete" : "";
  const validPwdClass = !validPassword ? "form__input--incomplete" : "";
  const validRolesClass = !Boolean(roles.length)
    ? "form__input--incomplete"
    : "";

  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>

      <div className="w-full justify-center flex">
        <form
          className="form flex flex-col w-full lg:w-1/2"
          onSubmit={onSaveUserClicked}
        >
          <div className="inline-flex w-full justify-between text-white py-4">
            <h2>New User</h2>
            <div className="form__action-buttons">
              <button className="icon-button" title="Save" disabled={!canSave}>
                <SVG
                  src="/icons/save.svg"
                  title="view notes"
                  className="fill-white"
                />
              </button>
            </div>
          </div>
          <label className="form__label text-white pb-2" htmlFor="username">
            Username: <span className="nowrap">[3-20 letters]</span>
          </label>
          <input
            className={`form__input ${validUserClass}`}
            id="username"
            name="username"
            type="text"
            autoComplete="off"
            value={username}
            onChange={onUsernameChanged}
          />

          <label className="form__label text-white pt-4" htmlFor="password">
            Password:{" "}
            <span className="nowrap text-white">[4-12 chars incl. !@#$%]</span>
          </label>
          <input
            className={`form__input ${validPwdClass}`}
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={onPasswordChanged}
          />

          <label className="form__label text-white pt-4" htmlFor="roles">
            ASSIGNED ROLES:
          </label>
          <select
            id="roles"
            name="roles"
            className={`form__select ${validRolesClass}`}
            multiple={true}
            size="3"
            value={roles}
            onChange={onRolesChanged}
          >
            {options}
          </select>
        </form>
      </div>
    </>
  );

  return content;
};
export default NewUserForm;
