import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/Todo";
import { useDispatch } from "react-redux";

const Header = () => {
  // const context = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  // const { addTodo } = context;
  const addTodo = () => {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  };

  return (
    <div>
      <input onChange={(e) => setTodo(e.target.value)} type="text" />
      <button onClick={() => addTodo(todo)}>Add</button>
    </div>
  );
};

export default Header;
