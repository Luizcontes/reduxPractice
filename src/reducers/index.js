import counter from "./counter";
import loggedReducer from "./isLogged"
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counter,
    logger: loggedReducer
})

export default allReducers