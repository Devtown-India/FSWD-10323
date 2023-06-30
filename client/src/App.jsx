import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/SIgnup";
import NotFound from "./layout/NotFound";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [state, setState] = useState({
    user: null,
    token: null,
  });

  useEffect(() => {
    validateAuth();
  }, []);

  const validateAuth = async () => {
    try {
      if (localStorage.getItem("token")) {
        // make a req to server to validate the token
        const res = await axios.get(
          `http://localhost:8080/validatetoken/${localStorage.getItem("token")}`
        );
        const { user, token } = res.data;
        setState({ user, token });
      }
    } catch (error) {
      console.log(error);
      localStorage.removeItem("token");
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home state={state} />} />
        <Route path="/signup" element={<Signup state={state} />} />
        <Route
          path="/login"
          element={<Login state={state} setState={setState} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
