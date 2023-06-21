import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";


const App = () => {

  /*
    * title
    * complete
    * id
  */

  const [todos,setTodos] = useState([])
  console.log(todos)

  return (
    <div>
      <Header setTodos={setTodos} />
      <List setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;
