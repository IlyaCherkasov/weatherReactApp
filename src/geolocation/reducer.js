import types from './actionTypes';

const initialState = {
  loading: false,
  geolocation: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GEOLOCATION_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GEOLOCATION_SUCCESS: {
      return {
        ...state,
        geolocation: action.payload,
        loading: false,
      };
    }
    case types.GEOLOCATION_FAILURE: {
      return {
        ...state,
        geolocation: {
          latitude: 59.860656899999995,
          longitude: 30.317027299999996,
        },
        loading: false,
      };
    }
    default:
      return state;
  }
}
