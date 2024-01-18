import SVG from "react-inlinesvg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNoteById } from "./notesApiSlice";

const Note = ({ noteId }) => {
  const note = useSelector((state) => selectNoteById(state, noteId));

  const navigate = useNavigate();

  if (note) {
    const created = new Date(note.createdAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    const updated = new Date(note.updatedAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    const handleEdit = () => navigate(`/dashboard/notes/${noteId}`);

    return (
      <tr className="table__row h-[3rem]">
        <td className="table__cell note__status text-white border-2 border-white text-center">
          {note.completed ? (
            <span className="note__status--completed">Completed</span>
          ) : (
            <span className="note__status--open">Open</span>
          )}
        </td>
        <td className="table__cell note__created text-white border-2 border-white text-center">
          {created}
        </td>
        <td className="table__cell note__updated text-white border-2 border-white text-center">
          {updated}
        </td>
        <td className="table__cell note__title text-white border-2 border-white text-center">
          {note.title}
        </td>
        <td className="table__cell note__username text-white border-2 border-white text-center">
          {note.username}
        </td>

        <td className="table__cell text-white border-2 border-white text-center">
          <button className="icon-button table__button" onClick={handleEdit}>
            <SVG src="/icons/pencil.svg" title="edit note" />
          </button>
        </td>
      </tr>
    );
  } else return null;
};
export default Note;
