import types from './actionTypes';
import * as services from './services';

export const getFavourites = () => (dispatch) => {
  dispatch({ type: types.FAVOURITES_REQUEST });
  services.getFavourites()
      .then(x => dispatch({ type: types.FAVOURITES_SUCCESS, payload: x }))
      .catch(x => dispatch({ type: types.FAVOURITES_FAILURE, payload: x.message }));
};

export const addFavourite = (townName) => (dispatch) => {
  dispatch({ type: types.FAVOURITE_ADD_REQUEST });
  services.addFavourite(townName)
      .then(() => dispatch({ type: types.FAVOURITE_ADD_SUCCESS, payload: townName }))
      .catch(x => dispatch({ type: types.FAVOURITE_ADD_FAILURE, payload: x.message }));
};

export const rmFavourite = (townName) => (dispatch) => {
  dispatch({ type: types.FAVOURITE_REMOVE_REQUEST });
  services.rmFavourite(townName)
      .then(() => dispatch({ type: types.FAVOURITE_REMOVE_SUCCESS, payload: townName }))
      .catch(x => dispatch({ type: types.FAVOURITE_REMOVE_FAILURE, payload: x.message }));
};
