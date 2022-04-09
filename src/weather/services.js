const APIKey = 'e34c51f8b71bca2945c6901e59dc5b69';
const shouldSendRequestToApi = (process.env.REACT_APP_MODE || 'api') === 'api'; 

export function getWeatherByGeo(geolocation) {
  if (shouldSendRequestToApi) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geolocation.latitude}&lon=${geolocation.longitude}&APPID=${APIKey}`);
  }
  return fetch(`http://localhost:8080/weather/coordinates/${geolocation.latitude}&${geolocation.longitude}`);
}

export function getWeatherByName(town) {
  if (shouldSendRequestToApi) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&APPID=${APIKey}`);
  }
  return fetch(`http://localhost:8080/weather/city/${town}`);
}