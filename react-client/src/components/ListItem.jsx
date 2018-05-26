import React from 'react';
import axios from 'axios'

const ListItem = ({movie, saveFavorites}) => (
    <img onClick={() => saveFavorites(movie)} src={"http://image.tmdb.org/t/p/w185/"+movie.poster_path} height="300"/>
)

export default ListItem;