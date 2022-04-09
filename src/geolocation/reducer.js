import types from './actionTypes';

const initialState = {
  geolocation: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GEOLOCATION_SUCCESS: {
      return {
        ...state,
        geolocation: action.payload,
      };
    }
    case types.GEOLOCATION_FAILURE: {
      return {
        ...state,
        geolocation: {
          latitude: 59.860656899999995,
          longitude: 30.317027299999996,
        },
      };
    }
    default:
      return state;
  }
}
