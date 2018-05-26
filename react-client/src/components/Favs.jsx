import React from 'react';
import FavItem from  './FavItem.jsx'

const Favs = ({favorites, deleteFavorites}) => (
  <div>
     <h1>My Favorites</h1>
    {favorites.map(fav => <FavItem fav={fav} deleteFavorites={deleteFavorites}/>)}
  </div>
)

export default Favs;