import axios from 'axios';

const shouldUseLocalStorage = (process.env.REACT_APP_MODE || 'api') === 'api'; 

export function getFavorites() {
  if (shouldUseLocalStorage) {
    if (localStorage.getItem('favorites')) {
      return Promise.resolve(JSON.parse(localStorage.getItem('favorites')));
    }
    localStorage.setItem('favorites', JSON.stringify([]));
    return Promise.resolve([]);
  }
  return axios.get('http://localhost:8080/favorites').then(x => x.data);
}

export function addFavorite(townName) {
  const data = { name: townName };
  if(shouldUseLocalStorage) {
    let favorites;
    if (localStorage.getItem('favorites')) {
      favorites = JSON.parse(localStorage.getItem('favorites'));
      if (favorites.find(favorite => favorite.name === townName) !== undefined) {
        return Promise.resolve();
      }
    } else {
      favorites = [];
    }
    favorites.push(data);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return Promise.resolve();
  }
  return axios.post('http://localhost:8080/favorites', data);
}

export function rmFavorite(townName) {
  if(shouldUseLocalStorage) {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites = favorites.filter(favorite => favorite.name !== townName);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return Promise.resolve();
  }
  return axios.delete(`http://localhost:8080/favorites/${townName}`);
}
