import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClickMore, setClickMore] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleMoreInfo = (e) => {
    e.preventDefault();
    setClickMore(!isClickMore);
  };

  return (
    <>
      <nav className="text-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 font-[ubuntu]">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://devagn-portfolio.onrender.com/assets/images/my-avatar.png"
              className="h-8"
              alt="Logo"
            />
            <span className="text-[16px] font-semibold whitespace-nowrap">
              Gtu Downloader
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-8">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/paper" className="hover:text-gray-300">Paper Downloader</Link>
            <Link to="/syllabus" className="hover:text-gray-300">Syllabus Downloader</Link>
            <button onClick={handleMoreInfo} className="hover:text-gray-300">
              More Tip
            </button>
          </div>

          {/* GitHub Button */}
          <div className="hidden md:flex md:order-2 space-x-3">
            <a
              href="https://github.com/devagn611"
              target="_blank"
              className="text-white border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-black transition"
            >
              Github →
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 shadow-lg transition-opacity">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/paper" className="hover:text-gray-300">Paper Downloader</Link>
            <Link to="/syllabus" className="hover:text-gray-300">Syllabus Downloader</Link>
            <button onClick={handleMoreInfo} className="hover:text-gray-300">
              More Tip
            </button>
          </div>
        )}
      </nav>

      {/* More Info Alert */}
      {isClickMore && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-16 w-[350px] z-50 bg-white p-4 rounded-lg shadow-lg animate-fade-in font-[ubuntu]">
          <div
            role="alert"
            className="rounded border-s-4 border-red-500 bg-red-50 p-4"
          >
            <div className="flex items-center gap-2 text-red-800">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.4 3c1.16-2 4.04-2 5.2 0l7.35 12.75c1.15 2-.29 4.5-2.6 4.5H4.64c-2.31 0-3.75-2.5-2.6-4.5L9.4 3zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              <strong className="block font-medium"> Tip (સાદી સલાહ ભયલુ) </strong>
            </div>
            <p className="mt-2 text-sm text-red-700">
              Chanu munu download karine vachva lag <br />
              a GTU che bhai game tyare ude game ene udade <br />
              ALL The Best
            </p>
            <button onClick={handleMoreInfo} className="text-blue-600 hover:underline mt-2">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
