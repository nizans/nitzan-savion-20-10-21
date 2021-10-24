import { Transition } from "@headlessui/react";
import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import useFavoriteButton from "./FavoriteButton.hooks";
import { useCheckIsFavorite } from "./Favorites.hooks";

const FavoriteButton = ({ locationKey = null, cityName = "", countryName = "", size = 35, color = "#FCA311", ...props }) => {
  const isFavorite = useCheckIsFavorite(locationKey);
  const { handleAdd, handleRemove } = useFavoriteButton(locationKey, cityName, countryName);

  const handleClick = e => {
    e.stopPropagation();
    if (!locationKey) return;
    if (!isFavorite) handleAdd();
    else handleRemove();
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
        <button className="absolute" onClick={e => handleClick(e)} {...props}>
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
