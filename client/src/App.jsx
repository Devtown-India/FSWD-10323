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

  return (
    <div>
      <button onClick={handleDec} >-</button>
      <h1>{count}</h1>
      <button onClick={handleInc} >+</button>
      
      <button onClick={()=>addTodo("this is an item")} >Add</button>
      <ul>
        {todos.map((todo,index)=><li key={index} >{todo}</li>)}
      </ul>
    </div>
  );
};

export default App;
