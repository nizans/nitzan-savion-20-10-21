import { Tab } from '@headlessui/react';
import React from 'react';
import SingleDayDetailedView from './SingleDayDetailedView';
import SingleDayView from './SingleDayView';

const FiveDaysTabs = ({ days, dailyForecasts, isDetailedView = false }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
        {days.map((day) => (
          <Tab
            key={day.full}
            className={({ selected }) =>
              `w-full py-2 rounded-lg focus:ring-2 focus:ring-blue-500  ${
                selected
                  ? 'bg-blue-400 shadow text-white'
                  : 'text-blue-600 hover:bg-white/[0.12] '
              }`
            }
          >
            <span className="hidden sm:block">{day.full}</span>
            <span className="sm:hidden">{day.short}</span>
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {dailyForecasts.map((weatherData, i) => (
          <Tab.Panel key={weatherData.EpochDate}>
            {isDetailedView ? (
              <SingleDayDetailedView weatherData={weatherData} day={days[i]} />
            ) : (
              <SingleDayView weatherData={weatherData} day={days[i]} />
            )}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default FiveDaysTabs;
