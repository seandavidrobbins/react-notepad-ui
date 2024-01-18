import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewNoteMutation } from "./notesApiSlice";
import SVG from "react-inlinesvg";

const NewNoteForm = ({ users }) => {
  const [addNewNote, { isLoading, isSuccess, isError, error }] =
    useAddNewNoteMutation();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [userId, setUserId] = useState(users[0].id);

  useEffect(() => {
    if (isSuccess) {
      setTitle("");
      setText("");
      setUserId("");
      navigate("/dashboard/notes");
    }
  }, [isSuccess, navigate]);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (e) => setText(e.target.value);
  const onUserIdChanged = (e) => setUserId(e.target.value);

  const canSave = [title, text, userId].every(Boolean) && !isLoading;

  const onSaveNoteClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await addNewNote({ user: userId, title, text });
    }
  };

  const options = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {" "}
        {user.username}
      </option>
    );
  });

  const errClass = isError ? "errmsg" : "offscreen";
  const validTitleClass = !title ? "form__input--incomplete" : "";
  const validTextClass = !text ? "form__input--incomplete" : "";

  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>
      <div className="w-full flex justify-center mt-12">
        <form className="flex flex-col w-1/2" onSubmit={onSaveNoteClicked}>
          <div className=" inline-flex w-full justify-between">
            <h2 className="text-white">New Note</h2>
            <div className="text-white">
              <button className="icon-button" title="Save" disabled={!canSave}>
                <SVG src="/icons/save.svg" title="save changes" />
              </button>
            </div>
          </div>
          <label className="text-white" htmlFor="title">
            Title:
          </label>
          <input
            className={`${validTitleClass}`}
            id="title"
            name="title"
            type="text"
            autoComplete="off"
            value={title}
            onChange={onTitleChanged}
          />

          <label className="text-white" htmlFor="text">
            Text:
          </label>
          <textarea
            className={`${validTextClass}`}
            id="text"
            name="text"
            value={text}
            onChange={onTextChanged}
          />

          <label className="text-white" htmlFor="username">
            ASSIGNED TO:
          </label>
          <select
            id="username"
            name="username"
            className="form__select"
            value={userId}
            onChange={onUserIdChanged}
          >
            {options}
          </select>
        </form>
      </div>
    </>
  );

  return content;
};

export default NewNoteForm;
