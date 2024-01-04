import Public from "./components/Public.js";
import Login from "./lib/auth/Login.js";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard.js";
import Welcome from "./lib/auth/Welcome.js";
import NotesList from "./lib/notes/NotesList.js";
import UsersList from "./lib/users/UsersList.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Public />} />
      <Route path="login" element={<Login />} />
      <Route path="dash" element={<Dashboard />}>
        <Route index element={<Welcome />} />
        <Route path="notes">
          <Route index element={<NotesList />} />
        </Route>
        <Route path="users">
          <Route index element={<UsersList />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
