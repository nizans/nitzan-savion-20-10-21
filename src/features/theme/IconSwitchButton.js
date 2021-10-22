import React from 'react';
import { Switch } from '@headlessui/react';

const IconSwitchButton = ({
  RightIconComponent,
  LeftIconComponent,
  onChangeHandler,
  checkedValue,
}) => {
  return (
    <div className="flex items-center space-x-2">
      {LeftIconComponent}
      <Switch
        checked={checkedValue}
        onChange={onChangeHandler}
        className="bg-dark-lighter dark:bg-light-darker relative inline-flex items-center h-6 rounded-full w-11 transition-colors ease-in-out transform scale-125"
      >
        <span
          className={`${
            checkedValue ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-primary rounded-full transition ease-in-out duration-200`}
        />
      </Switch>
      {RightIconComponent}
    </div>
  );
};

export default IconSwitchButton;
