import types from './actionTypes';
import * as services from './services';

export const getWeatherByGeo = (geolocation, callback) => (dispatch) => {
  dispatch({ type: types.WEATHER_REQUEST });
  services.getWeatherByGeo(geolocation)
    .then(async x => {
      dispatch({ type: types.WEATHER_SUCCESS, payload: await x.json()});
      callback();
    })
    .catch(x => {
      dispatch({type: types.WEATHER_FAILURE, payload: x.message});
      callback();
    });
};

export const getWeatherByName = (town, callback) => (dispatch) => {
  dispatch({ type: types.WEATHER_NAME_REQUEST });
  services.getWeatherByName(town)
    .then(async x => {
      dispatch({ type: types.WEATHER_NAME_SUCCESS, payload: { name: town, weather: await x.json() } });
      callback();
    })
    .catch(x => {
      dispatch({type: types.WEATHER_NAME_FAILURE, payload: x.message});
    });
};

