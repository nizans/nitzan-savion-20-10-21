import { getWeatherIconURL } from 'constants/URLs';
import React from 'react';
import checkIfDayTime from 'utils/checkIfDayTime';

const SingleDayView = ({ weatherData, day }) => {
  const isDayTime = checkIfDayTime(weatherData.Sun.Rise, weatherData.Sun.Set);

  const { Temperature: temp, RealFeelTemperature: feelsLike } = weatherData;
  let phrase = weatherData.Day.LongPhrase;
  let iconSrc = getWeatherIconURL(weatherData.Day.Icon);
  if (!isDayTime) {
    phrase = weatherData.Night.LongPhrase;
    iconSrc = getWeatherIconURL(weatherData.Night.Icon);
  }

  const getRiseToSetTimeString = () => {
    let SunOrMoon = isDayTime ? 'Sun' : 'Moon';
    let riseTime = isDayTime
      ? new Date(weatherData.Sun.Rise)
      : new Date(weatherData.Moon.Rise);
    let setTime = isDayTime
      ? new Date(weatherData.Sun.Set)
      : new Date(weatherData.Moon.Set);

    return (
      <h3>
        <strong>{SunOrMoon} Time: </strong>
        {riseTime.getHours() +
          ':' +
          ('0' + riseTime.getMinutes()).slice(-2)} -{' '}
        {setTime.getHours() + ':' + ('0' + setTime.getMinutes()).slice(-2)}
      </h3>
    );
  };

  return (
    <div className="border rounded-md flex flex-col justify-between p-4 w-full text-white bg-black bg-opacity-50 ">
      <h3 className="text-base font-bold ">{day.full}</h3>
      <img src={iconSrc} width="150px" alt="" className="mx-auto" />
      <h1 className="text-xl font-light italic">{phrase}</h1>
      <div className="text-base">
        <h3>
          <strong>Temperature: </strong>
          <span className="">
            {`${temp.Minimum.Value + temp.Minimum.Unit} -
        ${temp.Maximum.Value + temp.Maximum.Unit}`}
          </span>
        </h3>
        <h3>
          <strong>Feels Like: </strong>
          {`${feelsLike.Minimum.Value + feelsLike.Minimum.Unit} -
        ${feelsLike.Maximum.Value + feelsLike.Maximum.Unit}`}
        </h3>
        {getRiseToSetTimeString()}
      </div>
    </div>
  );
};

export default SingleDayView;
