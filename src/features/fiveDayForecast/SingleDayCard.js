import URLs from "constants/URLs";
import useWindowDimensions from "hooks/useWindowDimensions";
import React from "react";
import checkIfDayTime from "utils/checkIfDayTime";
import { useGetSingleDayTemps } from "./SingleDayCard.hooks";

const SingleDayCard = ({ weatherData, day }) => {
  const isDayTime = checkIfDayTime(weatherData.Sun.Rise, weatherData.Sun.Set);
  const { width: windowWidth } = useWindowDimensions();
  const { minTempStr, maxTempStr, feelsLikeMin, feelsLikeMax } = useGetSingleDayTemps(weatherData.Temperature, weatherData.RealFeelTemperature);

  let phrase = weatherData.Day.LongPhrase;
  let iconSrc = URLs.getWeatherIconURL(weatherData.Day.Icon);
  if (!isDayTime) {
    phrase = weatherData.Night.LongPhrase;
    iconSrc = URLs.getWeatherIconURL(weatherData.Night.Icon);
  }

  const getRiseToSetTimeString = () => {
    let SunOrMoon = isDayTime ? "Sun" : "Moon";
    let riseTime = isDayTime ? new Date(weatherData.Sun.Rise) : new Date(weatherData.Moon.Rise);
    let setTime = isDayTime ? new Date(weatherData.Sun.Set) : new Date(weatherData.Moon.Set);
    return (
      <h3>
        <strong>{windowWidth >= 1024 && windowWidth < 1280 ? SunOrMoon + ": " : SunOrMoon + " Time: "}</strong>
        {riseTime.getHours() + ":" + ("0" + riseTime.getMinutes()).slice(-2)} - {setTime.getHours() + ":" + ("0" + setTime.getMinutes()).slice(-2)}
      </h3>
    );
  };

  return (
    <div className="border rounded-md flex flex-col justify-between p-4 w-full text-white bg-black bg-opacity-50 space-y-4">
      <h3 className="text-base font-bold ">{day.full}</h3>
      <img src={iconSrc} width="150px" alt="" className="mx-auto" />
      <h1 className="text-xl font-light italic">{phrase}</h1>
      <div className="text-base sm:text-lg lg:text-base space-y-2 flex flex-col items-stretch">
        <h3 className="whitespace-nowrap">
          <strong>{windowWidth >= 1024 && windowWidth < 1280 ? "Temp: " : "Temperature: "}</strong>
          <span className="">{`${minTempStr} - ${maxTempStr} `}</span>
        </h3>
        <h3 className="whitespace-nowrap">
          <strong>{windowWidth >= 1024 && windowWidth < 1280 ? "Feels: " : "Feels Like: "}</strong>
          {`${feelsLikeMin} - ${feelsLikeMax}`}
        </h3>
        {getRiseToSetTimeString()}
      </div>
    </div>
  );
};

export default SingleDayCard;
