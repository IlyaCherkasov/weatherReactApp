const APIKey = 'e34c51f8b71bca2945c6901e59dc5b69';
export function getWeatherByGeo(geolocation) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geolocation.latitude}&lon=${geolocation.longitude}&APPID=${APIKey}`);
}

export function getWeatherByName(town) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&APPID=${APIKey}`);
}