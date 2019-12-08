export function getWeatherByGeo(geolocation) {
  return fetch(`http://localhost:8080/weather/coordinates/${geolocation.latitude}&${geolocation.longitude}`);
}

export function getWeatherByName(town) {
  return fetch(`http://localhost:8080/weather/city/${town}`);
}