import "./App.css";
import MainAdmin from "./Component/Admin/MainAdmin";
import Footer from "./Component/Admin/Footer";
import Index from "./Component/User/Index";
import { Route, Routes } from "react-router-dom";
import Register from "./Component/Admin/Register";
import Forgot from "./Component/Admin/Forgot";
import Login from "./Component/Admin/Login";
import { Cookies } from "react-cookie";

function App() {
  // let user = Cookies.get("user");
  // console.log(user);
  const user = "dfs";
  return (
    <div>
      {!user ? (
        <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
          <Footer />
        </>
      )}
      {/* <MainAdmin /> */}
    </div>
  );
}

export default App;
