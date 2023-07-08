import { useContext } from "react";
import { TodoContext } from "../contexts/Todo";
import { useSelector, useDispatch } from "react-redux";

const List = () => {
  // const context = useContext(TodoContext);
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li onClick={() => handleDelete(todo.id)} key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
