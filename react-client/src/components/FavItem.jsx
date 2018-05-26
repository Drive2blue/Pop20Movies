import React from 'react';
import axios from 'axios'

const FavItem = ({fav, deleteFavorites}) => (
  <div onClick={() => deleteFavorites(fav)}>
    {fav.title}
  </div>
)

export default FavItem;