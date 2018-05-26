import React from 'react';
import FavItem from  './FavItem.jsx'

const Favs = ({favorites}) => (
  <div>
     <h4>Favorites</h4>
    {favorites.map(fav => <FavItem fav={fav}/>)}
  </div>
)

export default Favs;