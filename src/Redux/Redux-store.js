
import { reducer as formReducer } from 'redux-form'
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import docReducer from "./document_reducer";


let reducers = combineReducers({
    documentW: docReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store