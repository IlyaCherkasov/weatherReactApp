import types from './actionTypes';

const initialState = {
  weather: null,
  error: null,
  namedWeather: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.WEATHER_SUCCESS: {
      return {
        ...state,
        weather: action.payload,
      };
    }
    case types.WEATHER_FAILURE:
    case types.WEATHER_NAME_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case types.WEATHER_NAME_SUCCESS: {
      return {
        ...state,
        namedWeather: {
          ...state.namedWeather,
          [action.payload.name]: action.payload.weather
        }
      };
    }
    default:
      return state;
  }
}
