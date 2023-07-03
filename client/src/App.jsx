import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Header from "./components/Header";
import List from "./components/List";
import { TodoContextProvider } from "./contexts/Todo";

const App = () => {
  return (
    <div>
      <Navbar />
      <TodoContextProvider>
        <Header />
        <List />
      </TodoContextProvider>
      <Footer />
    </div>
  );
};

export default App;
