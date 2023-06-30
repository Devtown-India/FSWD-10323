import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/SIgnup";
import NotFound from "./layout/NotFound";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState({
    user: null,
    token: null,
  });
  return (
    <div>
      <Routes>
        <Route state={state} path="/" element={<Home />} />
        <Route state={state} path="/signup" element={<Signup />} />
        <Route state={state} path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
