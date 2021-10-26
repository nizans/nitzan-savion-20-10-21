import { infoNotification, successNotification } from "features/notifications/notifications.model";
import { addNotification } from "features/notifications/notifications.slice";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "./favorites.slice";

export const useFavoriteButton = (locationKey, cityName, countryName) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    const message = `${cityName}, ${countryName} added to favorites`;
    dispatch(addNotification(successNotification(message, 5000)));
    dispatch(addFavorite({ key: locationKey, cityName, countryName }));
  };

  const handleRemove = () => {
    const message = `${cityName}, ${countryName} removed from favorites`;
    dispatch(addNotification(infoNotification(message, 5000)));
    dispatch(removeFavorite({ key: locationKey }));
  };
  return { handleAdd, handleRemove };
};

export default useFavoriteButton;
