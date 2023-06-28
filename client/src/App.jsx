import { useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";

const App = () => {
  const [view, setView] = useState("home");
  console.log(window.location);

  return (
    <div>
      <ul>
        <li onClick={() => setView("home")}>Home</li>
        <li onClick={() => setView("contact")}>COntact</li>
      </ul>
      {view === "home" ? <Home /> : <Contact />}
    </div>
  );
};

export default App;
