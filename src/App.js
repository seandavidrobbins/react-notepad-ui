import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./lib/auth/Login";
import Dashboard from "./components/Dashboard";
import Welcome from "./lib/auth/Welcome";
import NotesList from "./lib/notes/NotesList";
import UsersList from "./lib/users/UsersList";
import EditUser from "./lib/users/EditUser";
import NewUserForm from "./lib/users/NewUserForm";
import EditNote from "./lib/notes/EditNote";
import NewNote from "./lib/notes/NewNote";
import Prefetch from "./lib/auth/Prefetch";
import PersistLogin from "./lib/auth/PersistLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route element={<Prefetch />}>
          <Route element={<PersistLogin />}>
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
            {/* End Dash */}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
