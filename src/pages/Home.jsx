import React from "react";
import Card from "../components/card.jsx";
import jsonData from "../assets/data.json";
import CardData from "../assets/data2.json";
import BottomCard from "../components/bottomCards.jsx";
import Signup from "../Layout/Signup.jsx";

const Home = () => {
  return (
    <div className="ml-4 mr-4 md:ml-80 md:mr-80">
      {" "}
      {/* Added margin for small screens and centered content for medium screens */}
      <h1 className="text-4xl text-black-500 p-3">
        Best Website Builders in the US
      </h1>
      <hr className="w-full border-gray-400 mb-1" />{" "}
      {/* Full width separator */}
      <div className="flex flex-col md:flex-row items-center justify-between p-2">
        {" "}
        {/* Adjusted alignment and spacing */}
        <span className="flex items-center text-gray-400 mb-2 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Last updated - February 20, 2020
        </span>
        <span className="flex items-center text-gray-400 mb-2 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          Advertising Disclosure
        </span>
        <select className="bg-transparent text-gray-400 mb-2 md:mb-0">
          <option value="Top Relevant">Top Relevant</option>
        </select>
      </div>
      <hr className="w-full border-gray-400 mb-3" />{" "}
      {/* Full width separator */}
      <div className="flex flex-wrap justify-center">
        {" "}
        {/* Centered buttons */}
        <button className="bg-white text-gray-500 rounded-full px-4 py-2 m-1">
          Tools
        </button>
        <button className="bg-white text-gray-500 rounded-full px-4 py-2 m-1">
          AWS Builder
        </button>
        <button className="bg-white text-gray-500 rounded-full px-4 py-2 m-1">
          Start Build
        </button>
        <button className="bg-white text-gray-500 rounded-full px-4 py-2 m-1">
          Build Supplies
        </button>
        <button className="bg-white text-gray-500 rounded-full px-4 py-2 m-1">
          Tooling
        </button>
        <button className="bg-white text-gray-500 rounded-full px-4 py-2 m-1">
          BlueHosting
        </button>
      </div>
      <div className="text-gray-400 mt-3 cursor-pointer">
        Home &gt; Hosting For all &gt; Hosting &gt; Hosting 6 &gt; Hosting 5
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {" "}
        {/* Centered cards */}
        {jsonData.map((data, index) => (
          <Card key={index} cardData={data} />
        ))}
      </div>
      <h1 className="text-bold text-4xl mt-8 text-center">
        {" "}
        {/* Centered heading */}
        Related Work You Might Like for{" "}
      </h1>
      <div className="flex flex-wrap justify-center">
        {CardData.map((card) => (
          <BottomCard key={card.id} cardData={card} />
        ))}
      </div>
      <Signup />
    </div>
  );
};

export default Home;
