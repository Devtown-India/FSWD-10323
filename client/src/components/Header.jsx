import { useState } from "react";
import { nanoid } from "nanoid";

const Header = ({ setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    if (todo === "") return alert("Please enter a todo");
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: nanoid(),
        title: todo,
        complete: false,
      },
    ]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div class="relative w-full my-3">
      <input
        value={todo}
        onChange={handleChange}
        type="search"
        id="add-todo"
        class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Add item to your todo list"
        required
      />
      <button
        onClick={handleSubmit}
        type="submit"
        id="add-todo-btn"
        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add
      </button>
    </div>
  );
};
export default Header;
