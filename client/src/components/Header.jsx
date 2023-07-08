import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/todo";

const Header = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const handleAdd = () => dispatch(addTodo(todos, todo));

  return (
    <div>
      <input onChange={(e) => setTodo(e.target.value)} type="text" />
      <button onClick={() => handleAdd()}>Add</button>
    </div>
  );
};

export default Header;
