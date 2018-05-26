import React from 'react';
import axios from 'axios'

const FavItem = ({fav, deleteFavorites}) => (
    <img onClick={() => deleteFavorites(fav)} src={"http://image.tmdb.org/t/p/w185/"+fav.poster} height="300"/>
)

export default FavItem;