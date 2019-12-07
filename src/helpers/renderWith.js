import React from 'react';
import thunkMiddleware from "redux-thunk";
import {applyMiddleware, compose, createStore} from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import reducer from '../store/rootReducer';

export function renderWithRedux(
  ui,
  { initialState, store = compose(applyMiddleware(thunkMiddleware))(createStore)(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}
