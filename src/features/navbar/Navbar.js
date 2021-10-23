import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import SmallNavbar from "./SmallNavbar";
import ThemeButtons from "../theme/ThemeButtons";
import { navigation } from "./navigation.data.js";

const Navbar = () => {
  return (
    <>
      <Disclosure as="nav" className="bg-light-darker dark:bg-dark fixed w-full top-0 z-50 shadow-xl">
        {({ open }) => (
          <>
            <div className="container mx-auto px-4  xl:text-xl 2xl:text-2xl">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md dark:text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6 text-primary" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6 text-primary" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <h1 className="text-primary font-bold text-xl xl:text-3xl 2xl:text-4xl">Hello Herolo (¬‿¬)</h1>
                  </div>
                  <div className="hidden md:flex items-center md:ml-6 w-full ">
                    <div className="flex space-x-4">
                      {navigation.map(item => (
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
            <SmallNavbar navigation={navigation} open={open} />
          </>
        )}
      </Disclosure>
      <div style={{ height: "64px" }} />
    </>
  );
};

export default Navbar;
