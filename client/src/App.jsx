import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

const App = () => {

  const [todos, setTodos] = useState([])

  return (
    <div className="antialiased  bg-slate-200 text-slate-700 mx-2">
      <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div class="flex flex-col justify-between items-center">
          <div>
            <h1 class="text-3xl font-medium">Todo list</h1>
          </div>
          <Header />
        </div>

        <p class="text-slate-500">{todos.length!==0?`Hello, here are your latest todos`:`Add todos to get started`} </p>
        <div id="todo-container..."></div>

        <p class="text-xs text-slate-500 mt-4 text-center">
          Last updated
          <span id="last-updated">{new Date().toDateString()}</span>
        </p>
      </div>
    </div>
  );
};

export default App;
