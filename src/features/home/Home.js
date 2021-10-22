import FiveDayForecastWrapper from 'features/fiveDayForecast/FiveDayForecastWrapper';
import SearchInput from 'features/searchInput/SearchInput';
import { selectDefaultLocation } from 'features/home/Home.slice';
import { useFetchLocationPhoto } from 'hooks/reactQuery';
import React from 'react';
import { useSelector } from 'react-redux';
import parseImageToSrc from 'utils/imageFromBlob';

const Home = () => {
  const { cityName, countryName } = useSelector(selectDefaultLocation);
  const {
    data: imageBlob,
    isSuccess,
    isLoading,
  } = useFetchLocationPhoto(cityName, countryName, 2560);

  return (
    <div className="flex flex-col h-full bg-cover relative">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover "
        style={{
          backgroundImage: isLoading
            ? 'url(https://placeimg.com/124/124/nature)'
            : isSuccess
            ? 'url(' + parseImageToSrc(imageBlob) + ')'
            : '',
          filter: isLoading ? 'blur(100px)' : 'blur(0px)',
          transition: '1s filter linear',
        }}
      >
        <div className="w-full h-full bg-light-darker bg-opacity-50 dark:bg-dark-lighter dark:bg-opacity-50"></div>
      </div>
      <div className="px-4 z-10">
        <div className="container mx-auto">
          <span className="flex w-full my-14">
            <SearchInput />
          </span>
          <FiveDayForecastWrapper />
        </div>
      </div>
    </div>
  );
};

export default Home;
