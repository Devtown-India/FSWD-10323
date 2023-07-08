import { nanoid } from "nanoid"

const initialState = {
    todos: [],
    stuff:{
        id: 1,
        something:'something'
    }
}

export const todoReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos,{
                    id:nanoid(),
                    title:action.payload,
                    complete:false
                }]
            }
        default:
            return state
    }
}