import FavoriteButton from "features/favorites/FavoriteButton";
import { setDefaultLocation } from "features/fiveDayForecast/defaultLocation.slice";
import Spinner from "features/UI/Spinner";
import { useFetchLocationPhoto, useGetCurrectConditions } from "lib/reactQuery/query.hooks";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { ROUTE_PREFIX } from "routes/AppRoutes";
import parseImageToSrc from "utils/imageFromBlob";
import FavoriteLocationCardInner from "./FavoriteLocationCardInner";

const FavoriteLocationCard = ({ cityName, countryName, locationKey }) => {
  const { data: locationData, status } = useGetCurrectConditions(locationKey);
  const { data: imageBlob, isSuccess } = useFetchLocationPhoto(cityName, countryName);
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleClick = () => {
    dispatch(setDefaultLocation({ key: locationKey, cityName, countryName }));
    push(ROUTE_PREFIX);
  };

  return (
    <div className="relative w-56 h-80 border rounded-md border-dark-lighter dark:bg-light-darker">
      <div className="overflow-hidden">
        <div
          style={{
            backgroundImage: isSuccess && "url(" + parseImageToSrc(imageBlob) + ")",
          }}
          className="bg-cover absolute top-0 left-0 right-0 bottom-0 transorm scale-1.5"
        ></div>
      </div>

      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-dark-lighter bg-opacity-50 hover:bg-opacity-20 p-4 text-white cursor-pointer"
        style={{
          transition: "background .3s ease-out",
        }}
        onClick={e => handleClick(e)}
      >
        <div className="flex flex-col justify-between h-full ">
          <h1>
            {cityName}, {countryName}
          </h1>
          <FavoriteButton locationKey={locationKey} cityName={cityName} countryName={countryName} className="absolute right-2 top-2 z-10" />
          {status === "success" && <FavoriteLocationCardInner locationData={locationData[0]} cityName={cityName} countryName={countryName} />}
          {status === "loading" && (
            <span className="m-auto">
              <Spinner size="4rem" />
              <h1 className="mt-4">Loading...</h1>
            </span>
          )}
          {status === "error" && <h1 className="m-auto">Unavailable</h1>}
        </div>
      </div>
    </div>
  );
};

export default FavoriteLocationCard;
