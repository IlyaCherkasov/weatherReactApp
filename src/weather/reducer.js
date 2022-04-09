import types from './actionTypes';

const initialState = {
  weather: null,
  error: null,
  namedWeather: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.WEATHER_REQUEST: {
      return {
        ...state,
        weather: null,
        error: null,
      };
    }
    case types.WEATHER_SUCCESS: {
      return {
        ...state,
        weather: action.payload,
      };
    }
    case types.WEATHER_FAILURE: {
      return {
        ...state,
        error: action.payload.message,
      };
    }
    case types.WEATHER_NAME_FAILURE: {
      return {
        ...state,
        namedWeather: {
          ...state.namedWeather,
          [action.payload.name]: {
            error: action.payload.error.message,
          },
        }
      };
    }
    case types.WEATHER_NAME_SUCCESS: {
      return {
        ...state,
        namedWeather: {
          ...state.namedWeather,
          [action.payload.name]: {
            weather: action.payload.weather,
          },
        }
      };
    }
    default:
      return state;
  }
}
