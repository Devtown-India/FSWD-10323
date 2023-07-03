import { useContext } from "react";
import { TodoContext } from "../contexts/Todo";

const List = () => {
  const context = useContext(TodoContext);
  const { todos } = context;
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
