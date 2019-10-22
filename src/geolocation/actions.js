import types from './actionTypes';
import * as services from './services';

export const getGeolocation = (callback) => (dispatch) => {
  dispatch({ type: types.GEOLOCATION_REQUEST });
  services.getGeolocation().getCurrentPosition(
    location => {
      dispatch({ type: types.GEOLOCATION_SUCCESS, payload: location.coords });
      callback();
    },
    () => {
      dispatch({
        type: types.GEOLOCATION_FAILURE,
        payload: 'Geolocation denied. Setting default value',
      });
      callback();
    }
  );
};
