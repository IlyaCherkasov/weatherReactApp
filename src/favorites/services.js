import axios from 'axios';
export function getFavorites() {
  return axios.get('http://localhost:8080/favorites').then(x => x.data);
}

export function addFavorite(townName) {
  const data = { name: townName };
  return axios.post('http://localhost:8080/favorites', data);
}

export function rmFavorite(townName) {
  return axios.delete(`http://localhost:8080/favorites/${townName}`);
}
