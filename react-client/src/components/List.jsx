import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({movies, saveFavorites}) => (
  <div>
    {movies.map(movie => <ListItem movie={movie} saveFavorites={saveFavorites}/>)}
  </div>
)

export default List;