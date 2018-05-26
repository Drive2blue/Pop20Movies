import React from 'react';
import axios from 'axios'

const ListItem = ({movie, saveFavorites}) => (
  <div onClick={() => saveFavorites(movie)}>
    {movie.title}
  </div>
)

export default ListItem;