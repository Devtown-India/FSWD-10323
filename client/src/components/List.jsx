import "../css/List.css";

const List = ({ todos,setTodos }) => {

  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <section>
      <ul className="todos">
        {todos.map((todo, index) => {
          return (
            <li key={todo.id}>
              {todo.title}{" "}
              <button onClick={() => handleDelete(todo.id)}>-</button>
            </li>
          );
        })}
        {
          todos.length === 0 && <li>No todos left!</li>
        }
      </ul>
    </section>
  );
};

export default List;
