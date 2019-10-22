import { combineReducers } from 'redux';
import geolocation from '../geolocation/reducer';
import favourites from '../favourites/reducer';
import weather from '../weather/reducer';

const appReducer = combineReducers({
  geolocation,
  favourites,
  weather,
});

const rootReducer = (state, actionValue) => {
  return appReducer(state, actionValue);
};

export default rootReducer;