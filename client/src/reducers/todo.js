import { nanoid } from "nanoid"

const initialState = {
    todos: [],
    stuff:{
        id: 1,
        something:'something'
    }
}

export default (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'ADD_TODO':
            return {
                // ...state,
                todos: [...state.todos,{
                    id:nanoid(),
                    title:action.payload,
                    complete:false
                }]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state
    }
}