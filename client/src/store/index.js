import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {todoReducer} from '../reducers/todo';

const store = createStore(todoReducer, composeWithDevTools(applyMiddleware()));

export default store;