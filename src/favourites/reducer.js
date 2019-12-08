import types from './actionTypes';

const initialState = {
  favourites: null,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FAVOURITES_SUCCESS: {
      return {
        ...state,
        favourites: action.payload.map(x => x.name),
      };
    }
    case types.FAVOURITES_FAILURE:
    case types.FAVOURITE_ADD_FAILURE:
    case types.FAVOURITE_REMOVE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      }
    }
    case types.FAVOURITE_REMOVE_SUCCESS: {
      const favourites = state.favourites.filter(x => x !== action.payload);
      return {
        ...state,
        favourites: favourites.length === 0 ? null : favourites,
      }
    }
    default:
      return state;
  }
}
