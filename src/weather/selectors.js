export const getWeather = state => state.weather.weather;
export const getError = state => state.weather.error;
export const getWeatherNamed = (state, name) => state.weather.namedWeather;
