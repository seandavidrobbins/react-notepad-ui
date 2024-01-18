import { useGetNotesQuery } from "./notesApiSlice";
import Note from "./Note";

const NotesList = () => {
  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNotesQuery(undefined, {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = notes;

    const tableContent = ids?.length
      ? ids.map((noteId) => <Note key={noteId} noteId={noteId} />)
      : null;

    content = (
      <table className="table table--notes border-2 border-white w-full bg-black">
        <thead className="table__thead text-white border-2 border-white h-[3rem]">
          <tr>
            <th
              scope="col"
              className="table__th note__status border-2 border-white"
            >
              Ticket Status
            </th>
            <th
              scope="col"
              className="table__th note__created border-2 border-white"
            >
              Created
            </th>
            <th
              scope="col"
              className="table__th note__updated border-2 border-white"
            >
              Updated
            </th>
            <th
              scope="col"
              className="table__th note__title border-2 border-white"
            >
              Title
            </th>
            <th
              scope="col"
              className="table__th note__username border-2 border-white"
            >
              Owner
            </th>
            <th scope="col" className="table__th note__edit">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }

  return content;
};
export default NotesList;
