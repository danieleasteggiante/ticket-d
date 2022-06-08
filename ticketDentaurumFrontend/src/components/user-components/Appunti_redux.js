import { createStore } from 'redux'; //Added combineReducers, apply Middleware


function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}

const store = createStore(todos, ['Use Redux'])

store.dispatch({
    type: 'ADD_TODO',
    text: 'Read the docs'
})

console.log(store.getState())


/* 
OUTPUT:
(2) ["Use Redux", "Read the docs"]
0: "Use Redux"
1: "Read the docs"
length: 2
__proto__: Array(0) */