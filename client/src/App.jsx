import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const App = () => {
  const [count, setcount] = useState(0);

  return (
    <div>
      <Navbar />
      <button onClick={() => setcount((prev) => prev + 1)}>inc</button>
      {count}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
