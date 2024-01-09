import Public from "./components/Public.js";
import Login from "./lib/auth/Login.js";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard.js";
import Welcome from "./lib/auth/Welcome.js";
import NotesList from "./lib/notes/NotesList.js";
import UsersList from "./lib/users/UsersList.js";
import EditUser from "./lib/users/EditUser.js";
import NewUserForm from "./lib/users/NewUserForm.js";
import EditNote from "./lib/notes/EditNote.js";
import NewNote from "./lib/notes/NewNote.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Public />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Welcome />} />
        <Route path="users">
          <Route index element={<UsersList />} />
          <Route path=":id" element={<EditUser />} />
          <Route path="new" element={<NewUserForm />} />
        </Route>
        <Route path="notes">
          <Route index element={<NotesList />} />
          <Route path=":id" element={<EditNote />} />
          <Route path="new" element={<NewNote />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
