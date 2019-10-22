import types from './actionTypes';
import * as services from './services';

export const getFavourites = () => (dispatch) => {
  dispatch({ type: types.FAVOURITES_REQUEST });
  let favourites = services.getFavourites();
  dispatch({ type: types.FAVOURITES_SUCCESS, payload: favourites });
};

export const addFavourite = (townName) => (dispatch) => {
  dispatch({ type: types.FAVOURITE_ADD_REQUEST });
  let favourites = services.addFavourite(townName);
  dispatch({ type: types.FAVOURITE_ADD_SUCCESS, payload: favourites });
};

export const rmFavourite = (townName) => (dispatch) => {
  dispatch({ type: types.FAVOURITE_REMOVE_REQUEST });
  let favourites = services.rmFavourite(townName);
  dispatch({ type: types.FAVOURITE_REMOVE_SUCCESS, payload: favourites });
};
