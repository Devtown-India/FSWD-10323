import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";


const App = () => {

  let [count, setCount] = useState(0)

  const handleInc = ()=>{
    setCount((prev)=>prev+1)
  }

  const handleDec = ()=>{
    setCount((prev)=>prev-1)
  }

  const [todos,setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos([...todos,todo])
  }

  console.log('render')

  return (
    <div>
      <Header/>
    </div>
  );
};

export default App;
