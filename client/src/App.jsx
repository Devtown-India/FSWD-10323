import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";


const App = () => {

  const [todos,setTodos] = useState(['todo 1', 'todo 2', 'todo 23'])

  return (
    <div>
      <Header setTodos={setTodos} />
      <List todos={todos} />
    </div>
  );
};

export default App;
