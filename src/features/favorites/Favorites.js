import { useSelector } from 'react-redux';
import { selectFavorites } from './Favorites.slice';
import FavoriteLocationCard from '../../components/FavoriteLocationCard/FavoriteLocationCard';
import { useFetchMultipleCurrentConditions } from 'hooks/reactQuery';
import Divider from 'components/UI/Divider';
const Favorites = () => {
  const favoritesKeys = useSelector(selectFavorites);

  useFetchMultipleCurrentConditions(favoritesKeys.map((fav) => fav.key));

  if (favoritesKeys.length === 0) return <h1>No favorites</h1>;
  return (
    <div className="my-14">
      <div className="font-bold">My Favorites Locations:</div>
      <Divider />
      <div className="flex flex-col flex-wrap sm:flex-row justify-center items-center gap-10 ">
        {favoritesKeys.map((fav, i) => (
          <FavoriteLocationCard
            key={fav.key}
            locationKey={fav.key}
            cityName={fav.cityName}
            countryName={fav.countryName}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
