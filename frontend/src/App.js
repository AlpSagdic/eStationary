import { Route, Routes } from "react-router-dom";
import "./css/queries.css";
import "./css/style.css";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
