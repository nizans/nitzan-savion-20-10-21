import React from 'react';
import { NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import ThemeButtons from './ThemeButtons';

const SmallNavbar = ({ navigation }) => {
  return (
    <Disclosure.Panel className="sm:hidden">
      {({ close }) => (
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              exact={item.exact}
              to={item.to}
              activeClassName="bg-primary"
              className="px-3 py-2 rounded-md dark:text-white hover:bg-primary flex items-center"
              onClick={close}
            >
              <span className="mr-4">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
          <div>
            <ThemeButtons />
          </div>
        </div>
      )}
    </Disclosure.Panel>
  );
};

export default SmallNavbar;
