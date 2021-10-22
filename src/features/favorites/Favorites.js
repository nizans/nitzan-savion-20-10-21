import { useSelector } from 'react-redux';
import { selectFavorites } from './Favorites.slice';
import FavoriteLocationCard from 'features/favorites/FavoriteLocationCard';
import { useFetchMultipleCurrentConditions } from 'hooks/reactQuery';
import Divider from 'features/UI/Divider';

const Favorites = () => {
  const favoritesKeys = useSelector(selectFavorites);

  useFetchMultipleCurrentConditions(favoritesKeys.map((fav) => fav.key));

  if (favoritesKeys.length === 0) return <h1>No favorites</h1>;
  return (
    <div className=" mx-auto container py-14 px-2 ">
      <div className="font-bold text-black dark:text-white text-2xl xl:text-2xl 2xl:text-3xl">
        My Favorites Locations:
      </div>
      <Divider className="my-8 divide-primary" />
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
