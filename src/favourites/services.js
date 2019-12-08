import axios from 'axios';
export function getFavourites() {
  return axios.get('http://localhost:8080/favourites').then(x => x.data);
}

export function addFavourite(townName) {
  const data = { name: townName };
  return axios.post('http://localhost:8080/favourites', data);
}

export function rmFavourite(townName) {
  return axios.delete(`http://localhost:8080/favourites/${townName}`);
}
