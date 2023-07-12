import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

import React, { Fragment, lazy } from "react";
import { Menu, Transition } from "@headlessui/react";

import { urlFor } from "../lib/client";

const Navbar = ({ infoData }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="relative z-10">
      {infoData?.map((item, index) => (
        <div key={index} className="mx-auto w-[95%]">
          <div className="relative">
            <Menu>
              <div className="relative py-4">
                <nav
                  className="relative flex items-center justify-between"
                  aria-label="Global"
                >
                  <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                    <div className="flex w-full items-center justify-between md:w-auto">
                      <Link href="/">
                        <img
                          className="h-24 mr-3 sm:h-24"
                          src={urlFor(item.logo).url()}
                          alt="Comapany logo"
                        />
                      </Link>
                      <div className="flex items-center md:hidden">
                        <Menu.Button className="inline-flex items-center justify-center rounded-md  p-2 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#324d67]">
                          <span className="sr-only">Open main menu</span>
                          <svg
                            className="h-8 w-8"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                            />
                          </svg>

                          {/* <MenuIcon  /> */}
                        </Menu.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden  md:ml-10 md:flex md:flex-row md:items-center md:justify-between ">
                    <div className="flex flex-row items-center space-x-8">
                      <Link
                        href="/"
                        className="block py-2 pl-3 pr-4 text-red text-lg  rounded md:bg-transparent  md:p-0 hover:text-red-900"
                      >
                        Home
                      </Link>
                      <Link
                        href="/about-us"
                        className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent hover:text-[#ff6b66] md:p-0 "
                        aria-current="page"
                      >
                        About-Us
                      </Link>

                      <Link
                        href="/blogs"
                        className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent hover:text-[#ff6b66] md:p-0 "
                        aria-current="page"
                      >
                        Blogs
                      </Link>
                      <Link
                        href="/#contact-us"
                        className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent hover:text-[#ff6b66] md:p-0 "
                        aria-current="page"
                      >
                        Contact Us
                      </Link>

                      <button
                        type="button"
                        className="cart-icon"
                        onClick={() => setShowCart(true)}
                      >
                        <AiOutlineShopping />
                        <span className="cart-item-qty">{totalQuantities}</span>
                      </button>

                      {showCart && <Cart />}
                    </div>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="-translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="-translate-x-0"
                leaveTo="translate-x-full"
              >
                <Menu.Items className="absolute top-0 right-0 w-[60%] md:hidden bg-white">
                  <div className="overflow-hidden rounded-l  shadow-md ring-1">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <div>
                        {/* <img className="h-8 mr-3 sm:h-10" src={logo} alt="" /> */}
                      </div>
                      <div className="-mr-2">
                        <Menu.Button className="inline-flex items-center justify-center rounded-md p-2hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#324d67]">
                          <span className="sr-only">Close main menu</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-8 w-8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </Menu.Button>
                      </div>
                    </div>
                    <div className="flex flex-col px-2 pt-2 pb-3">
                      <div className="flex flex-col px-2 pt-2 pb-2 space-y-5">
                        <Link
                          href="/"
                          className="block py-2 pl-3 pr-4 text-black  rounded   md:p-0"
                          aria-current="page"
                        >
                          Home
                        </Link>
                        <Link
                          href="/about-us"
                          className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
                          aria-current="page"
                        >
                          About-Us
                        </Link>

                        <Link
                          href="/blogs"
                          className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
                          aria-current="page"
                        >
                          Blogs
                        </Link>
                        <Link
                          href="/#contact-us"
                          className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
                          aria-current="page"
                        >
                          Contact-Us
                        </Link>
                        <div>
                          <button
                            type="button"
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                          >
                            <AiOutlineShopping />
                            <span className="cart-item-qty">
                              {totalQuantities}
                            </span>
                          </button>

                          {showCart && <Cart />}
                        </div>
                      </div>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
