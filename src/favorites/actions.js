import types from './actionTypes';
import * as services from './services';

export const getFavorites = () => (dispatch) => {
  dispatch({ type: types.FAVORITES_REQUEST });
  services.getFavorites()
      .then(x => dispatch({ type: types.FAVORITES_SUCCESS, payload: x }))
      .catch(x => dispatch({ type: types.FAVORITES_FAILURE, payload: x.message }));
};

export const addFavorite = (townName) => (dispatch) => {
  dispatch({ type: types.FAVORITE_ADD_REQUEST });
  services.addFavorite(townName)
      .then(() => dispatch({ type: types.FAVORITE_ADD_SUCCESS, payload: townName }))
      .catch(x => dispatch({ type: types.FAVORITE_ADD_FAILURE, payload: x.message }));
};

export const rmFavorite = (townName) => (dispatch) => {
  dispatch({ type: types.FAVORITE_REMOVE_REQUEST });
  services.rmFavorite(townName)
      .then(() => dispatch({ type: types.FAVORITE_REMOVE_SUCCESS, payload: townName }))
      .catch(x => dispatch({ type: types.FAVORITE_REMOVE_FAILURE, payload: x.message }));
};
