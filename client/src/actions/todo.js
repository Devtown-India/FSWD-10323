import { nanoid } from "nanoid";
import store from "../store";

export const addTodo = (todos, todo) => async (dispatch) => {
    /// await for thinggs 
  const newTodos = [
    ...todos,
    {
      id: nanoid(),
      title: todo,
      complete: false,
    },
  ];
  dispatch({
    type: "ADD_TODO",
    payload: newTodos,
  });
};

export const deleteTodo = (todos, id) => {
  const newTodos = todos.filter((todo) => todo.id !== id);
  return {
    type: "DELETE_TODO",
    payload: newTodos,
  };
};
