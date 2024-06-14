import { useEffect } from "react";
import React from "react";
const Navbar = React.memo(() => {

  return (
    <>
      <header className="top-[0] fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
        <nav
          className=" max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="/"
              aria-label="Brand"
            >
              <img
                src="/images/Website/logo_red.png"
                alt=""
                className=""
                style={{ height: "100px", width: "100px" }}
              />
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden size-4"
                  width="16"
                  height="16"

                  viewBox="0 0 16 16"
                >
                  <path

                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block flex-shrink-0 hidden size-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <a
                className="font-medium text-primary_red sm:py-6 dark:text-blue-500 hover:translate-y-[-3px] duration-300"
                href="/#home"
                aria-current="page"
              >
                HOME
              </a>
              <a
                className="hover:translate-y-[-3px] duration-300 font-medium text-primary_red hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="/#about"
              >
                ABOUT US
              </a>
              <a
                className="hover:translate-y-[-3px] duration-300 font-medium text-primary_red hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="/#services"
              >
                SERVICES
              </a>
              <a
                className="hover:translate-y-[-3px] duration-300 font-medium text-primary_red hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="/#contact"
              >
                CONTACT US
              </a>

              {/* <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                <button
                  type="button"
                  className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-neutral-400 dark:hover:text-neutral-500 "
                >
                  Dropdown
                  <svg
                    className="ms-2 size-2.5 text-gray-500 dark:text-neutral-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                    href="#"
                  >
                    About
                  </a>
                  <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                    <button
                      type="button"
                      className="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                    >
                      Sub Menu
                      <svg
                        className="sm:-rotate-90 ms-2 size-2.5 text-gray-500 dark:text-neutral-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                        href="#"
                      >
                        About
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                        href="#"
                      >
                        Downloads
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                        href="#"
                      >
                        Team Account
                      </a>
                    </div>
                  </div>

                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                    href="#"
                  >
                    Downloads
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                    href="#"
                  >
                    Team Account
                  </a>
                </div>
              </div> */}


              <a
                className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500"
                href="#"
              >

<div>
                <a href="./#quote"
                  type="button"
                  className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary_red text-white hover:bg-red-800 disabled:opacity-50 disabled:pointer-events-none"
                >
                  GET A FREE QUOTE
                </a>
              </div>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
});

export default Navbar;
