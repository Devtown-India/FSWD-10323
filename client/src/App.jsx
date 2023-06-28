import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ul className="flex my-4">
        <li>
          <Link className="underline" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="underline" to="/contact">
            Contact
          </Link>
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
