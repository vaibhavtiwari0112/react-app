import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="flex flex-col md:flex-row md:justify-center">
        <div className="flex flex-col p-6 mx-4 my-2">
          <span className="text-lg md:text-2xl mb-4 text-gray-300">
            Categories
          </span>
          <span className="text-xs md:text-sm m-2">Web Hosting</span>
          <span className="text-xs md:text-sm m-2">Data Automation</span>
          <span className="text-xs md:text-sm m-2">Robotic Automation</span>
        </div>
        <div className="flex flex-col p-6 mx-4 my-2">
          <span className="text-lg md:text-2xl mb-4 text-gray-300">
            Contact Us
          </span>
          <span className="text-xs md:text-sm m-2">Privacy Policy</span>
          <span className="text-xs md:text-sm m-2">Data Automation</span>
          <span className="text-xs md:text-sm m-2">Robotic Automation</span>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <select className="bg-transparent text-xs md:text-sm text-gray-400 border-none">
          <option value="United States">United States</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
