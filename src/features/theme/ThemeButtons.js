import {
  selectTheme,
  toggleCelsius,
  toggleDarkMode,
} from 'features/theme/theme.slice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  RiCelsiusFill,
  RiFahrenheitFill,
  RiSunFill,
  RiMoonFill,
} from 'react-icons/ri';

import IconSwitchButton from './IconSwitchButton';

const ThemeButtons = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const [isDarkMode, setIsDarkMode] = useState(theme.dark);
  const [isCelsius, setIsCelsius] = useState(theme.celsius);

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
    dispatch(toggleDarkMode());
  };
  const handleUnitTypeClick = () => {
    setIsCelsius(!isCelsius);
    dispatch(toggleCelsius());
  };

  return (
    <div className="flex items-center justify-between space-x-2 w-full">
      <IconSwitchButton
        LeftIconComponent={
          <RiFahrenheitFill className="text-primary h-8 w-8 " />
        }
        RightIconComponent={<RiCelsiusFill className="h-8 w-8 text-primary" />}
        checkedValue={isCelsius}
        onChangeHandler={handleUnitTypeClick}
      />
      <IconSwitchButton
        LeftIconComponent={<RiSunFill className="text-primary h-8 w-8 " />}
        RightIconComponent={<RiMoonFill className="h-8 w-8 text-primary" />}
        checkedValue={isDarkMode}
        onChangeHandler={handleDarkModeClick}
      />
    </div>
  );
};

export default ThemeButtons;
