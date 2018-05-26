import React from 'react';
import axios from 'axios'

const FavItem = ({fav}) => (
  <div>
    {fav.title}
  </div>
)

export default FavItem;