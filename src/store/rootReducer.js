import { combineReducers } from 'redux';
import geolocation from '../geolocation/reducer';
import favorites from '../favorites/reducer';
import weather from '../weather/reducer';

const appReducer = combineReducers({
  geolocation,
  favorites,
  weather,
});

const rootReducer = (state, actionValue) => {
  return appReducer(state, actionValue);
};

export default rootReducer;