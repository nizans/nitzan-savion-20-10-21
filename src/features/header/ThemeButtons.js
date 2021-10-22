import {
  selectTheme,
  toggleCelsius,
  toggleDarkMode,
} from 'features/theme/theme.slice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MoonIcon, SunIcon } from '@heroicons/react/solid/';
import { Switch } from '@headlessui/react';

const ThemeButtons = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const [enabled, setEnabled] = useState(theme.dark);

  const handleDarkModeClick = () => {
    setEnabled(!enabled);
    dispatch(toggleDarkMode());
  };
  const handleUnitTypeClick = () => {
    dispatch(toggleCelsius());
  };

  return (
    <>
      {/* <span className="dark:text-gray-300 px-3 py-2 flex sm:py-0 ">
        <label>Unit:</label>
        <button
          onClick={() => handleUnitTypeClick()}
          className="ml-auto sm:ml-4 px-4 border border-gray-900 dark:border-white rounded-md"
        >
          {theme.celsius ? 'C' : 'F'}
        </button>
      </span>
      <span className="dark:text-gray-300 px-3 py-2 flex sm:py-0 ">
        <label>Theme:</label>
        <button
          onClick={() => handleDarkModeClick()}
          className="ml-auto sm:ml-4 px-4 border border-gray-900 dark:border-white  rounded-md"
        >
          {theme.dark ? (
            <MoonIcon className="h-8 w-8 text-primary" />
          ) : (
            <SunIcon className="text-primary h-8 w-8" />
          )}
        </button>
      </span> */}
      <div className="flex items-center space-x-2">
        <SunIcon className="text-primary h-8 w-8 " />
        <Switch
          checked={enabled}
          onChange={handleDarkModeClick}
          className={`${
            enabled ? 'bg-light-darker' : 'bg-dark-lighter'
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors ease-in-out transform scale-125`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
          />
        </Switch>
        <MoonIcon className="h-8 w-8 text-primary" />
      </div>
    </>
  );
};

export default ThemeButtons;
