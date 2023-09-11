import { Route, Routes } from "react-router-dom";
import "./css/queries.css";
import "./css/style.css";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
    </Routes>
  );
}

export default App;
