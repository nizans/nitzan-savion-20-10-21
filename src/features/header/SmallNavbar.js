import React from 'react';
import { NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';

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
              activeClassName="bg-gray-900 text-white"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={close}
            >
              {item.name}
            </NavLink>
          ))}
          <span className="text-gray-300 px-3 py-2 flex justify-between w-full">
            <label>Set Unit:</label>
            <button className="ml-auto px-4 border border-white rounded-md">
              F
            </button>
          </span>
          <span className="text-gray-300 px-3 py-2 flex justify-between w-full">
            <label>Set Theme:</label>
            <button className="ml-auto px-4 border border-white rounded-md">
              DARK
            </button>
          </span>
        </div>
      )}
    </Disclosure.Panel>
  );
};

export default SmallNavbar;
