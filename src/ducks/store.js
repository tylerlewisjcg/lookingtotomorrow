import { createStore, applyMiddleware } from "redux";
import reducers from './mainReducer';
import promiseMiddleware from "redux-promise-middleware";

const middleware = applyMiddleware(promiseMiddleware());

export default createStore(reducers, middleware);



