import { nanoid } from "nanoid"
import store from '../store'

export const addTodo = (todos,todo)=>{
    console.log(store.getState())
    const newTodos = [...todos,{
        id:nanoid(),
        title:todo,
        complete:false
    }]
    return {
        type:'ADD_TODO',
        payload:newTodos
    }
}

export const deleteTodo = (todos,id)=>{
    const newTodos = todos.filter(todo => todo.id !== id)
    return {
        type:'DELETE_TODO',
        payload:newTodos
    }
}