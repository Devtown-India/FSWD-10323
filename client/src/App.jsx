import { useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";

const App = () => {
  const goback = () => {
    console.log(window.history.back());
  };

  const changeurl = () => {
    window.history.pushState({}, "", "mobiles");
  };

  return (
    <div>
      <button onClick={goback}>Go back</button>
      <br />
      <button onClick={changeurl}>ChangeUrl</button>
    </div>
  );
};

export default App;
