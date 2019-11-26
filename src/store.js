import { createStore, combineReducers, applyMiddleware } from 'redux';
import  thunkMiddleware from 'redux-thunk';
import {  reducer as formReducer } from 'redux-form';
import usersReducer from "./reducers/usersReducer";

let rootReducer = combineReducers({
    form: formReducer,
    users: usersReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;