import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800">
        <div className="flex items-center justify-center md:w-auto w-full mb-4 md:mb-0">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              className="w-full md:w-40 pl-10 pr-4 py-2 rounded-md text-gray-800 bg-white focus:outline-none"
              placeholder="Search..."
            />
          </div>
        </div>
        <nav className="flex flex-col md:flex-row">
          <span className="text-gray-400 mx-2 md:mx-6 my-2 md:my-0 hover:underline cursor-pointer">
            Categories
          </span>
          <span className="text-gray-400 mx-2 md:mx-6 my-2 md:my-0 hover:underline cursor-pointer">
            Website Builders
          </span>
          <span className="text-gray-400 mx-2 md:mx-6 my-2 md:my-0 hover:underline cursor-pointer">
            Today's Deals
          </span>
        </nav>
      </header>
    </div>
  );
};

export default Header;
