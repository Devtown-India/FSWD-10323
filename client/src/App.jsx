import { useState } from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Timer from "./components/Timer";
import Navabar from "./layout/Navbar";
import Clicks from "./components/Clicks";

const App = () => {
  const [view, setView] = useState("home");
  const changeView = (view) => setView(view);
  return (
    <div>
      <Navabar changeView={changeView} />
      {view === "home" ? (
        <Home />
      ) : view === "posts" ? (
        <Posts />
      ) : view === "timer" ? (
        <Timer />
      ) : (
        <Clicks />
      )}
    </div>
  );
};

export default App;
