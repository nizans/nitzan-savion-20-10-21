import { useSelector } from "react-redux";
import { selectFavorites } from "./Favorites.slice";
import FavoriteLocationCard from "features/favorites/FavoriteLocationCard";
import { useFetchMultipleCurrentConditions } from "lib/reactQuery/query.hooks";
import Divider from "features/UI/Divider";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  useFetchMultipleCurrentConditions(favorites.map(fav => fav.key));

  if (favorites.length === 0)
    return (
      <div className="w-full h-full m-auto container flex justify-center items-center">
        <h1 className="text-3xl text-black dark:text-white text-center">You don't have any favorite locations yet.🤷🏻‍♂️</h1>
      </div>
    );
  return (
    <div className=" mx-auto container py-14 px-2 ">
      <div className="font-bold text-black dark:text-white text-2xl xl:text-2xl 2xl:text-3xl">My Favorites Locations:</div>
      <Divider className="my-8 divide-primary" />
      <div className="flex flex-col flex-wrap sm:flex-row justify-center items-center gap-10 ">
        {favorites.map((fav, i) => (
          <FavoriteLocationCard key={fav.key} locationKey={fav.key} cityName={fav.cityName} countryName={fav.countryName} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
