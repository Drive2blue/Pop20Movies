import React from 'react';
import FavItem from  './FavItem.jsx'

const Favs = ({favorites, deleteFavorites}) => (
  <div>
     <h4>Favorites</h4>
    {favorites.map(fav => <FavItem fav={fav} deleteFavorites={deleteFavorites}/>)}
  </div>
)

export default Favs;