import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({movies}) => (
  <div>
    <h4> List Component </h4>
    There are { movies.length } items.
    { movies.map(movie => <ListItem movie={movie}/>)}
  </div>
)

export default List;