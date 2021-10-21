import { Tab } from '@headlessui/react';
import FavoriteButton from 'components/FavoriteButton/FavoriteButton';
import Divider from 'components/UI/Divider';
import useWindowDimensions from 'hooks/useWindowDimensions';
import TLV from 'mock/tlv_forecast.json';
import React from 'react';
import parseDateToDay from 'utils/parseDateToDay';
import FiveDaysTabs from './FiveDaysTabs';
import SingleDayView from './SingleDayView';

const FiveDayForecast = ({
  locationKey,
  cityName = 'Tel Aviv',
  countryName = 'Israel',
  isDetailedView = false,
}) => {
  const data = TLV;
  const headline = data.Headline.Text;
  const dailyForecasts = data.DailyForecasts;
  const days = dailyForecasts.map((forcast) =>
    parseDateToDay(new Date(forcast.Date))
  );

  const { width: windowWidth } = useWindowDimensions();

  return (
    <div className="w-full text-2xl h-full flex flex-col ">
      <div className="flex justify-between">
        <div>
          <h1>
            {cityName}, {countryName}
          </h1>
          <h1 className="italic font-thin">{headline}</h1>
          <h1>Five Days Forecast:</h1>
        </div>
        <div className="mb-auto flex">
          <FavoriteButton />
        </div>
      </div>

      <Divider className="w-full" />
      <div className="h-full flex  justify-center">
        {windowWidth < 1024 ? (
          <div className="w-full h-full">
            <FiveDaysTabs days={days} dailyForecasts={dailyForecasts} />
          </div>
        ) : (
          <div className=" items-stretch flex space-x-5">
            {dailyForecasts.map((weatherData, i) => (
              <SingleDayView
                key={weatherData.EpochDate}
                weatherData={weatherData}
                day={days[i]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FiveDayForecast;
