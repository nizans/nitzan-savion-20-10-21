import React from 'react';
import { getWeatherIconURL } from 'constants/URLs';

const FavoriteLocationCardInner = ({ locationData, cityName, countryName }) => {
  const { WeatherIcon, Temperature, WeatherText, RealFeelTemperature } =
    locationData;
  return (
    <>
      <img
        className="mx-auto"
        width="125px"
        src={getWeatherIconURL(WeatherIcon)}
        alt=""
      />
      <h1 className="text-5xl">{Temperature.Metric.Value + 'C'}</h1>
      <h3>{WeatherText}</h3>
      <h3>Feels Like: {RealFeelTemperature.Metric.Value + 'C'}</h3>
      <button className="mt-auto border border-white py-2 bg-black bg-opacity-50 hover:bg-opacity-100 rounded-md">
        5-Day forecast
      </button>
    </>
  );
};

export default FavoriteLocationCardInner;
