import { useContext, useState } from "react";
import { TodoContext } from "../contexts/Todo";

const Header = () => {
  const context = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const { addTodo } = context;

  return (
    <div>
      <input onChange={(e) => setTodo(e.target.value)} type="text" />
      <button onClick={() => addTodo(todo)}>Add</button>
    </div>
  );
};

export default Header;
