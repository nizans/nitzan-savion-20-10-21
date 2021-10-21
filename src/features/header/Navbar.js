import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import useDimensions from 'hooks/useDimensions';
import { NavLink } from 'react-router-dom';
import SmallNavbar from './SmallNavbar';

const navigation = [
  { name: 'Home', to: '/', exact: true },
  { name: 'Favorites', to: '/favorites', exact: false },
];

const Navbar = () => {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 fixed w-full top-0 z-50">
        {({ open }) => (
          <>
            <div className="container mx-auto px-2 sm:px-0 ">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <h1 className="text-white font-bold">Hello Herolo :)</h1>
                  </div>
                  <div className="hidden sm:flex items-center sm:ml-6 w-full">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.to}
                          exact={item.exact}
                          activeClassName="bg-gray-900 text-white"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          to={item.to}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                    <div className="ml-auto">
                      <span className="text-gray-300">
                        <label>Set Unit:</label>
                        <button className="mx-4 px-4 border border-white rounded-md">
                          F
                        </button>
                      </span>
                      <span className="text-gray-300">
                        <label>Set Theme:</label>
                        <button className="ml-4 px-4 border border-white rounded-md">
                          DARK
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <SmallNavbar navigation={navigation} />
          </>
        )}
      </Disclosure>
      <div style={{ height: '64px' }} />
    </>
  );
};

export default Navbar;
