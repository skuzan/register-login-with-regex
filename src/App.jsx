import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";

const BASE_URL = "http://localhost:3005";

function App() {

  const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
    const isUserLogged = localStorage.getItem("key");
    if (isUserLogged) {
      setIsLogin(true);
    }
  }, []);
  
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route path="/login" element={<Login setIsLogin ={setIsLogin}/>} />
      </Routes>
    </div>
  );
}

export default App;
