import types from './actionTypes';

const initialState = {
  favorites: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FAVORITES_SUCCESS: {
      return {
        ...state,
        favorites: action.payload.map(x => x.name),
      };
    }
    case types.FAVORITES_FAILURE:
    case types.FAVORITE_ADD_FAILURE:
    case types.FAVORITE_REMOVE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      }
    }
    case types.FAVORITE_REMOVE_SUCCESS: {
      const favorites = state.favorites.filter(x => x !== action.payload);
      return {
        ...state,
        favorites: favorites.length === 0 ? null : favorites,
      }
    }
    case types.FAVORITE_ADD_SUCCESS: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    }
    default:
      return state;
  }
}
