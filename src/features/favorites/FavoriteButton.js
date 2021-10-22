import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from './Favorites.slice';

const useCheckFavorite = (key = null) => {
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    if (key) setIsFavorite(favorites.some((fav) => fav.key === key));
  }, [key, favorites]);

  return isFavorite;
};

const FavoriteButton = ({
  locationKey = null,
  cityName = '',
  countryName = '',
  size = 35,
  color = '#FCA311',
  ...props
}) => {
  const dispatch = useDispatch();
  const isFavorite = useCheckFavorite(locationKey);
  const handleClick = () => {
    if (!locationKey) return;
    if (!isFavorite)
      dispatch(addFavorite({ key: locationKey, cityName, countryName }));
    else dispatch(removeFavorite({ key: locationKey }));
  };

  return (
    <div>
      <Transition
        show={isFavorite}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <button className="absolute" onClick={handleClick} {...props}>
          <MdFavorite size={size} color={color} />
        </button>
      </Transition>

      <Transition
        show={!isFavorite}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <button className="absolute" onClick={handleClick} {...props}>
          <MdFavoriteBorder size={size} color={color} />
        </button>
      </Transition>
    </div>
  );
};

export default FavoriteButton;
