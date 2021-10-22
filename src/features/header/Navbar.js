import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
import SmallNavbar from './SmallNavbar';
import ThemeButtons from './ThemeButtons';

const navigation = [
  {
    name: 'Home',
    to: '/',
    exact: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
  },
  {
    name: 'Favorites',
    to: '/favorites',
    exact: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-light-darker dark:bg-dark fixed w-full top-0 z-50 "
      >
        {({ open }) => (
          <>
            <div className="container mx-auto px-2 sm:px-0 xl:text-xl 2xl:text-2xl">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md dark:text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    <h1 className="text-primary font-bold text-xl xl:text-3xl 2xl:text-4xl">
                      Hello Herolo (¬‿¬)
                    </h1>
                  </div>
                  <div className="hidden sm:flex items-center sm:ml-6 w-full ">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.to}
                          exact={item.exact}
                          activeClassName="bg-primary"
                          className="px-3 py-2 rounded-md dark:text-white hover:bg-primary flex items-center"
                          to={item.to}
                        >
                          {item.icon}
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                    <div className="ml-auto flex">
                      <ThemeButtons />
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
