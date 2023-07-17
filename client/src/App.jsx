import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Gallery from "./components/Gallery";
import PostView from "./components/PostView";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import Signup from "./components/auth/Signup";
import ResetPassword from "./components/auth/ResetPassword";

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
