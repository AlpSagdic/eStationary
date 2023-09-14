import { Route, Routes } from "react-router-dom";
import "./css/queries.css";
import "./css/style.css";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { UserContextProvider } from "./UserContext";
import { ShopContextProvider } from "./ShopContext";

function App() {
  return (
    <ShopContextProvider>
      <UserContextProvider>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/cart"} element={<Cart />} />
        </Routes>
      </UserContextProvider>
    </ShopContextProvider>
  );
}

export default App;
