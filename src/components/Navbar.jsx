// Navbar.jsx or Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {const showElement = (
  <div
    role="alert"
    className="rounded border-s-4 border-red-500 bg-red-50 p-4"
  >
    <div className="flex items-center gap-2 text-red-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5"
      >
        <path
          fillRule="evenodd"
          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clipRule="evenodd"
        />
      </svg>
      <strong className="block font-medium"> Tip (સાદી સલાહ ભયલુ) </strong>
    </div>
    <p className="mt-2 text-sm text-red-700">
      Chanu munu download karine vachva lag <br/>
      a GTU che bhai game tyare ude game ene udade <br/>
      ALL The Best
    </p>
    <a href="" onClick={handleMoreInfo}> close</a>
  </div>
);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClickMore, setClickMore] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleMoreInfo() {
    setClickMore(!isClickMore);
  }

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://devagn-portfolio.onrender.com/assets/images/my-avatar.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-[16px] font-semibold whitespace-nowrap dark:text-white">
              Gtu Downloader
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              href="https://github.com/devagn611"
              target="_blank"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Github &rarr;
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-gray-50 rounded md:bg-transparent md:p-0 hover:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/paper"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Paper Downloader
                </Link>
              </li>
              <li>
                <Link
                  to="/syllabus"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Syllabus Downloader
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={handleMoreInfo}
                >
                  More Tip
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Alert */}
      <div
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-16 w-[350px] z-50 bg-white p-4 rounded-lg shadow-lg ${isClickMore ? 'block' : 'hidden'}`}
      >
        {isClickMore ? showElement : ""}
      </div>
    </>
  );
};

export default Navbar;
