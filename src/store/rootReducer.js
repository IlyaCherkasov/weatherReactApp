import { combineReducers } from 'redux';
import geolocation from '../geolocation/reducer';

const appReducer = combineReducers({
  geolocation,
});

const rootReducer = (state, actionValue) => {
  return appReducer(state, actionValue);
};

export default rootReducer;