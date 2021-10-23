import React from "react";
import URLs from "constants/URLs";
import useTemperatureString from "hooks/useTemperatureString";

const FavoriteLocationCardInner = ({ locationData }) => {
  const { WeatherIcon, Temperature, WeatherText, RealFeelTemperature } = locationData;
  const [temp] = useTemperatureString(Temperature.Metric.Value);
  const [feelsLikeTemp] = useTemperatureString(RealFeelTemperature.Metric.Value);

  return (
    <>
      <img className="mx-auto" width="125px" src={URLs.getWeatherIconURL(WeatherIcon)} alt="" />
      <h1 className="text-5xl">{temp}</h1>
      <h3>{WeatherText}</h3>
      <h3>Feels Like: {feelsLikeTemp}</h3>
    </>
  );
};

export default FavoriteLocationCardInner;
