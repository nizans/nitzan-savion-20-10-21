import {
  useFetchLocationPhoto,
  useGetCurrectCondotions,
} from 'hooks/reactQuery';
import parseImageToSrc from 'utils/imageFromBlob';
import FavoriteButton from 'features/favorites/FavoriteButton';
import FavoriteLocationCardInner from './FavoriteLocationCardInner';
import Spinner from 'features/UI/Spinner';

const FavoriteLocationCard = ({ cityName, countryName, locationKey }) => {
  const { data: locationData, status } = useGetCurrectCondotions(locationKey);
  const { data: imageBlob, isSuccess } = useFetchLocationPhoto(
    cityName,
    countryName,
    224
  );

  return (
    <div
      style={{
        backgroundImage: isSuccess && 'url(' + parseImageToSrc(imageBlob) + ')',
      }}
      className=" w-56 h-80 border rounded-md border-black bg-cover relative"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 p-4  text-white">
        <div className="flex flex-col justify-between h-full">
          <h1>
            {cityName}, {countryName}
          </h1>
          <FavoriteButton
            locationKey={locationKey}
            cityName={cityName}
            countryName={countryName}
            className="absolute right-2 top-2 z-10"
          />
          {status === 'success' && (
            <FavoriteLocationCardInner
              locationData={locationData[0]}
              cityName={cityName}
              countryName={countryName}
            />
          )}
          {status === 'loading' && (
            <span className="m-auto">
              <Spinner size="4rem" />
              <h1 className="mt-4">Loading...</h1>
            </span>
          )}
          {status === 'error' && <h1 className="m-auto">Unavailable</h1>}
        </div>
      </div>
    </div>
  );
};

export default FavoriteLocationCard;
