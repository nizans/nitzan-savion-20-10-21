import FiveDayForecast from 'components/FiveDayForecast.js/FiveDayForecast';
import SearchInput from 'components/SearchInput/SearchInput';
import Divider from 'components/UI/Divider';
import { useFetchLocationPhoto } from 'hooks/reactQuery';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectDefaultLocation } from 'store/defaultLocationSlice';

const Home = () => {
  const { cityName, countryName } = useSelector(selectDefaultLocation);

  const { data, error, isSuccess, isLoading } = useFetchLocationPhoto(
    cityName,
    countryName
  );
  if (isSuccess) console.log(data);
  return (
    <div className="flex flex-col justify-start items-center h-full">
      <span className="flex w-full mt-14">
        <SearchInput />
      </span>
      <Divider className="w-full" />
      <FiveDayForecast />
    </div>
  );
};

export default Home;
