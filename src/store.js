import { createStore, applyMiddleware } from "redux";
import userReducer from './ducks/userReducer';
import promiseMiddleware from "redux-promise-middleware";

const middleware = applyMiddleware(promiseMiddleware());

export default createStore(userReducer, middleware);



///how do i import multiple reducers
