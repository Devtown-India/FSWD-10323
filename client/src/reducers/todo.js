const initialState = {
    todos: [],
}

export const todoReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        default:
            return state
    }
}