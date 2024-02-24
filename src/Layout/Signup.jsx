import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row items-center text-wrap m-4 p-2">
      <h1 className="font-inter text-gray-600 text-center md:text-left break-words text-2xl md:text-4xl md:mr-4">
        Sign-Up and Get Exclusive Special deals
      </h1>
      <div className="flex flex-col md:flex-row mt-4 md:mt-0">
        <input
          type="text"
          className="flex-1 bg-white border border-gray-300 rounded-l-lg p-2 focus:outline-none mb-2 md:mb-0 md:mr-2"
          placeholder="Enter your email"
        />
        <button className="bg-blue-500 text-white rounded-r-lg px-4 py-2 focus:outline-none">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
