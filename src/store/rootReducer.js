import { combineReducers } from 'redux';
import geolocation from '../geolocation/reducer';
import favourites from '../favourites/reducer';

const appReducer = combineReducers({
  geolocation,
  favourites,
});

const rootReducer = (state, actionValue) => {
  return appReducer(state, actionValue);
};

export default rootReducer;