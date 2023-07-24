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
import { Toaster } from "react-hot-toast";
import { loadUser } from "./redux/actions/auth";
import { useDispatch } from "react-redux";
import CreatePost from "./components/post/CreatePost";
import EditPost from "./components/post/EditPost";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch an action to load auth
    dispatch(loadUser());
  }, []);

  return (
    <div
      style={{
        height: "auto",
      }}
    >
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostView />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
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
