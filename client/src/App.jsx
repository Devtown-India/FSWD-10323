import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Gallery from "./components/Gallery";
import PostView from "./components/PostView";

const App = () => {
  return (
    <div
      style={{
        height: "auto",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/post/:id" element={<PostView />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
