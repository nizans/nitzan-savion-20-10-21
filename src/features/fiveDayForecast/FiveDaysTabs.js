import { Tab } from "@headlessui/react";
import React from "react";

import SingleDayCard from "./SingleDayCard";

const FiveDaysTabs = ({ days, dailyForecasts }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
        {days.map(day => (
          <Tab
            key={day.full}
            className={({ selected }) =>
              `w-full py-2 rounded-lg text-black dark:text-white transition-colors duration-150  ${
                selected ? "bg-primary " : " hover:bg-primary hover:bg-opacity-50 "
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
            <SingleDayCard weatherData={weatherData} day={days[i]} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default FiveDaysTabs;
