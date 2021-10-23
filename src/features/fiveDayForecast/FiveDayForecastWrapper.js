import FavoriteButton from "features/favorites/FavoriteButton";
import { selectDefaultLocation } from "features/home/Home.slice";
import Divider from "features/UI/Divider";
import Spinner from "features/UI/Spinner";
import { useFetchFiveDaysForecast } from "lib/reactQuery/query.hooks";
import React from "react";
import { useSelector } from "react-redux";
import parseDateToDay from "utils/parseDateToDay";
import FiveDayForcastInner from "./FiveDayForcastInner";

const FiveDayForecastWrapper = () => {
  const { cityName, countryName, key: locationKey } = useSelector(selectDefaultLocation);

  const { data, isSuccess, isLoading, error } = useFetchFiveDaysForecast(locationKey);

  const headline = isSuccess ? data?.Headline?.Text : isLoading ? "Loading.." : error ? "Unavailable" : "";
  return (
    <div className="w-full text-2xl xl:text-2xl 2xl:text-3xl flex flex-col ">
      <div className="flex justify-between text-black dark:text-white relative">
        <div>
          <h1>
            {cityName}, {countryName}
          </h1>
          <h1 className="italic">{headline}</h1>
          {isSuccess && <h1>Five Days Forecast:</h1>}
        </div>
        <div className="absolute right-8">
          <FavoriteButton locationKey={locationKey} cityName={cityName} countryName={countryName} />
        </div>
      </div>
      <Divider className="w-full my-8" />
      {isLoading && (
        <div className="m-auto">
          <Spinner size={90} />
        </div>
      )}
      {isSuccess && (
        <FiveDayForcastInner dailyForecasts={data.DailyForecasts} days={data.DailyForecasts.map(forcast => parseDateToDay(new Date(forcast.Date)))} />
      )}
    </div>
  );
};

export default FiveDayForecastWrapper;
