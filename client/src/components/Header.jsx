import { useState } from "react";

const Header = ({ setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <header>
      <h1>Todo list</h1>
      <input onChange={handleChange} type="text" />
      <button onClick={handleSubmit}>Add</button>
    </header>
  );
};
export default Header;
