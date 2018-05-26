import React from 'react';
import FavItem from  './FavItem.jsx'

const Favs = ({favorites, deleteFavorites}) => (
  <div>
     <h2>Favorites</h2>
    {favorites.map(fav => <FavItem fav={fav} deleteFavorites={deleteFavorites}/>)}
  </div>
)

export default Favs;