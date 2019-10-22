export function getFavourites() {
  if (localStorage.getItem('favourites')) {
    return JSON.parse(localStorage.getItem('favourites'));
  }
  localStorage.setItem('favourites', JSON.stringify([]));
  return [];
}

export function addFavourite(townName) {
  let favourites;
  if (localStorage.getItem('favourites')) {
    favourites = JSON.parse(localStorage.getItem('favourites'));
    if (favourites.find(name => name === townName) !== undefined) {
      return favourites;
    }
  } else {
    favourites = [];
  }
  favourites.push(townName);
  localStorage.setItem('favourites', JSON.stringify(favourites));
  return favourites;
}

export function rmFavourite(townName) {
  let favourites = JSON.parse(localStorage.getItem('favourites'));
  favourites = favourites.filter(favourite => favourite !== townName);
  localStorage.setItem('favourites', JSON.stringify(favourites));
  return favourites;
}
