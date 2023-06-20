import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";


const App = () => {
  let count = 0

  const handleInc = ()=>{
    count++
    console.log(count)
  }

  const handleDec = ()=>{
    count--
    console.log(count)
  }
  return (
    <div>
      <button onClick={handleDec} >-</button>
      <h1>{count}</h1>
      <button onClick={handleInc} >+</button>

    </div>
  );
};

export default App;
