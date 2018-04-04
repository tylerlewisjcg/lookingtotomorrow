import { createStore, applyMiddleware } from "redux";
import userReducer from './ducks/userReducer';
import mainReducer from './ducks/mainReducer';
import promiseMiddleware from "redux-promise-middleware";

const middleware = applyMiddleware(promiseMiddleware());

export default createStore(userReducer, mainReducer, middleware);