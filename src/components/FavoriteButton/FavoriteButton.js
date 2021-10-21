import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const FavoriteButton = ({
  locationKey = true,
  size = 35,
  color = 'red',
  ...props
}) => {
  return (
    <button {...props}>
      {locationKey ? (
        <MdFavorite size={size} color={color} />
      ) : (
        <MdFavoriteBorder size={size} color={color} />
      )}
    </button>
  );
};

export default FavoriteButton;
