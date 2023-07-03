import React, { createContext, useState } from "react";
import {nanoid} from "nanoid";

const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Node", completed: false },
  ]);
  const addTodo = (title) => {
    setTodos([...todos, { id: nanoid(), title, completed: false }]);
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export {TodoContext,TodoContextProvider}