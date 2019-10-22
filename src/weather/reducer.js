import types from './actionTypes';

const initialState = {
  weather: null,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.WEATHER_SUCCESS: {
      return {
        ...state,
        weather: action.payload,
      };
    }
    case types.WEATHER_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
