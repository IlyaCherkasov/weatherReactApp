import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../store/rootReducer';

const middlewares = [thunkMiddleware];

export const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);