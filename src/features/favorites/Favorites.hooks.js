import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "./favorites.slice";

export const useCheckIsFavorite = (key = null) => {
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (key) setIsFavorite(favorites.some(fav => fav.key === key));
  }, [key, favorites]);

  return isFavorite;
};
