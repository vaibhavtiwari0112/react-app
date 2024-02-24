import React, { useState } from "react";

const Card = ({ cardData, index }) => {
  return (
    <div className="flex flex-col bg-white top-1803 left-655 rounded-12 m-4">
      <div className="justify-center p-5">
        <img
          className="w-141 h-103 top-422 left-326 object-cover m-4 flex bg-transparent"
          src={cardData.image}
          alt="Card"
        />
      </div>
      <div className="flex flex-col justify-between  px-6 py-4">
        <span className=" justify-between">
          <button className="bg-gray-200 text-blue-600 rounded-md w-1/3">
            {cardData.discount}
          </button>
          <button className="bg-gray-200 text-blue-600 rounded-md w-1/3 ml-3">
            Limited Time
          </button>
        </span>
        <div className="font-bold justify-center text-gray-600 flex text-base m-2">
          {cardData.title}-1
        </div>
        <span className="text-base flex justify-start text-gray-500 mb-2">
          {cardData.description}
        </span>
      </div>

      <div className="bg-white flex-row flex mr-6">
        <span className="text-xl text-blue-600 m-3">
          {cardData.discountedPrice}
        </span>
        <span className="text-sm text-bold text-gray-400 m-2 mt-5">
          {cardData.OriginalPrice}
        </span>
        <span className="text-red-600 text-base ml-5 m-3">
          ({cardData.discount})
        </span>
      </div>
      <button className="bg-blue-500 items-center text-white p-3 w-72 h-12 ml-10 rounded-lg">
        View Plan
      </button>
    </div>
  );
};

export default Card;
