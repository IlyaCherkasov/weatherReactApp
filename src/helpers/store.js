import thunkMiddleware from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "../store/rootReducer";

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);