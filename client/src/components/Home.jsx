import { useEffect } from "react";
import { useNavigate } from "react-router";

const Home = ({ state: { token, user } }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <div className="flex flex-col justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium">Todo list</h1>
        </div>
        <div className="relative w-full my-3">
          <input
            type="search"
            id="add-todo"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add item to your todo list"
            required=""
          />
          <button
            type="submit"
            id="add-todo-btn"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
      </div>
      <p className="text-slate-500">Hello, here are your latest list</p>
      <div id="todo-container" />
      <p className="text-xs text-slate-500 text-center">
        Last updated
        <span id="last-updated" />
      </p>
    </div>
  );
};

export default Home;
