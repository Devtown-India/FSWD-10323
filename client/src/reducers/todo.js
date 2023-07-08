import { nanoid } from "nanoid";

const initialState = {
  todos: [],
  stuff: {
    id: 1,
    something: "something",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: action.payload,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};
