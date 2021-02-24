import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from "redux-thunk"
import questionsReducer from "./question-reducer";

let reducers = combineReducers({
    questions: questionsReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
