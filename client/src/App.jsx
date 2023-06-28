import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Contact from "./components/Contact";

const App = () => {
  const goback = () => {
    console.log(window.history.back());
  };

  const changeurl = () => {
    window.history.pushState({}, "", "mobiles");
  };

  const { pathname: path } = window.location;

  return (
    <div>
      <ul>
        <li>
          <a className="underline" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="underline" href="/contact">
            Contact
          </a>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
