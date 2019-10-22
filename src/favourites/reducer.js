import types from './actionTypes';

const initialState = {
  favourites: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FAVOURITES_REQUEST:
    case types.FAVOURITE_ADD_REQUEST:
    case types.FAVOURITE_REMOVE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.FAVOURITES_SUCCESS:
    case types.FAVOURITE_ADD_SUCCESS:
    case types.FAVOURITE_REMOVE_SUCCESS: {
      return {
        ...state,
        favourites: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
}
