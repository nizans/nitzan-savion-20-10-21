import React from 'react';
import FiveDaysTabs from './FiveDaysTabs';
import SingleDayView from './SingleDayView';
import useWindowDimensions from 'hooks/useWindowDimensions';

const FiveDayForcastInner = ({ dailyForecasts, days }) => {
  const { width: windowWidth } = useWindowDimensions();

  return (
    <div className="h-full flex justify-center">
      {windowWidth < 1024 ? (
        <div className="w-full h-full">
          <FiveDaysTabs days={days} dailyForecasts={dailyForecasts} />
        </div>
      ) : (
        <div className="items-stretch flex space-x-2 xl:space-x-5">
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
  );
};

export default FiveDayForcastInner;
