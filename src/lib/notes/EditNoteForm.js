import { useState, useEffect } from "react";
import { useUpdateNoteMutation, useDeleteNoteMutation } from "./notesApiSlice";
import { useNavigate } from "react-router-dom";
import SVG from "react-inlinesvg";

const EditNoteForm = ({ note, users }) => {
  const [updateNote, { isLoading, isSuccess, isError, error }] =
    useUpdateNoteMutation();

  const [
    deleteNote,
    { isSuccess: isDelSuccess, isError: isDelError, error: delerror },
  ] = useDeleteNoteMutation();

  const navigate = useNavigate();

  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const [completed, setCompleted] = useState(note.completed);
  const [userId, setUserId] = useState(note.user);

  useEffect(() => {
    if (isSuccess || isDelSuccess) {
      setTitle("");
      setText("");
      setUserId("");
      navigate("/dashboard/notes");
    }
  }, [isSuccess, isDelSuccess, navigate]);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (e) => setText(e.target.value);
  const onCompletedChanged = (e) => setCompleted((prev) => !prev);
  const onUserIdChanged = (e) => setUserId(e.target.value);

  const canSave = [title, text, userId].every(Boolean) && !isLoading;

  const onSaveNoteClicked = async (e) => {
    if (canSave) {
      await updateNote({ id: note.id, user: userId, title, text, completed });
    }
  };

  const onDeleteNoteClicked = async () => {
    await deleteNote({ id: note.id });
  };

  const created = new Date(note.createdAt).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const updated = new Date(note.updatedAt).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const options = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {" "}
        {user.username}
      </option>
    );
  });

  const errClass = isError || isDelError ? "errmsg" : "offscreen";
  const validTitleClass = !title ? "form__input--incomplete" : "";
  const validTextClass = !text ? "form__input--incomplete" : "";

  const errContent = (error?.data?.message || delerror?.data?.message) ?? "";

  const content = (
    <>
      <p className={errClass}>{errContent}</p>

      <div className="w-full flex justify-center mt-12">
        <form
          className="form flex flex-col w-1/2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form__title-row inline-flex justify-between w-full">
            <h2 className="text-white">Edit Note #{note.ticket}</h2>
            <div className="form__action-buttons">
              <button
                className="icon-button text-white pr-2"
                title="Save"
                onClick={onSaveNoteClicked}
                disabled={!canSave}
              >
                <SVG src="/icons/save.svg" title="save changes" className="" />
              </button>
              <button
                className="icon-button text-white"
                title="Delete"
                onClick={onDeleteNoteClicked}
              >
                <SVG src="/icons/trashcan.svg" title="trash" />
              </button>
            </div>
          </div>
          <label className="form__label text-white" htmlFor="note-title">
            Title:
          </label>
          <input
            className={`form__input ${validTitleClass} `}
            id="note-title"
            name="title"
            type="text"
            autoComplete="off"
            value={title}
            onChange={onTitleChanged}
          />

          <label className="form__label text-white" htmlFor="note-text">
            Text:
          </label>
          <textarea
            className={`form__input form__input--text ${validTextClass}`}
            id="note-text"
            name="text"
            value={text}
            onChange={onTextChanged}
          />
          <div className="">
            <div className="py-2">
              <label className="text-white" htmlFor="note-completed">
                WORK COMPLETE:
                <input
                  className=""
                  id="note-completed"
                  name="completed"
                  type="checkbox"
                  checked={completed}
                  onChange={onCompletedChanged}
                />
              </label>

              <label
                className="form__label form__checkbox-container text-white"
                htmlFor="note-username"
              >
                ASSIGNED TO:
              </label>
              <select
                id="note-username"
                name="username"
                className="form__select"
                value={userId}
                onChange={onUserIdChanged}
              >
                {options}
              </select>
            </div>
            <div className="text-white inline-flex w-full justify-between">
              <p className="form__created">
                Created:
                <br />
                {created}
              </p>
              <p className="form__updated">
                Updated:
                <br />
                {updated}
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );

  return content;
};

export default EditNoteForm;
