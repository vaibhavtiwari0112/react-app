import React, { useState } from "react";

const Card = ({ cardData, index }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (e) => {
    e.stopPropagation();
    setShowMore(!showMore);
  };

  const getDescription = () => {
    if (!cardData || !cardData.description) {
      return "";
    }
    if (typeof cardData.description === "object") {
      const { boxBg, tickBox } = cardData.description;
      if (boxBg && tickBox) {
        const boxBgContent = Object.entries(boxBg).map(
          ([key, value], index) => (
            <div key={index} className={`bg-orange-100 p-2 mb-2 rounded`}>
              <span className="font-bold">{key}: </span>
              {value}
            </div>
          )
        );
        const tickBoxContent = Object.values(tickBox).map((value, index) => (
          <div key={index} className="flex items-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 0 1 1 1v5.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42L9 9.59V4a1 1 0 0 1 1-1z"
              />
              <path
                fillRule="evenodd"
                d="M4 12a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2H4z"
              />
            </svg>
            <span>{value}</span>
          </div>
        ));

        return (
          <div>
            <div className="font-bold mb-2">Box Background:</div>
            {boxBgContent}
            <div className="font-bold mt-4 mb-2">Tick Box:</div>
            {tickBoxContent}
          </div>
        );
      }
    }

    if (typeof cardData.description === "string") {
      if (showMore) {
        return cardData.description;
      } else {
        const words = cardData.description.split(" ");
        return words.slice(0, 20).join(" ");
      }
    }
  };

  const renderBestLabel = () => {
    if (cardData.id === 1) {
      return (
        <div className="absolute top-0 left-0 mt-2 ml-2">
          <span className="bg-orange-500 text-white py-1 px-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.707 3.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1-1.414 1.414L9 10.414l-6.293 6.293a1 1 0 1 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8A1 1 0 0 1 2 11V4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H6.414l6.293 6.293a1 1 0 0 1-1.414 1.414L5 6.414V9a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H6.707l6.293 6.293a1 1 0 1 1-1.414 1.414L4 6.414V11a1 1 0 1 1-2 0V4a2 2 0 0 1 2-2h7a2 2 0 1 1 0 4H9a1 1 0 1 1 0-2h2z"
                clipRule="evenodd"
              />
            </svg>
            Best Value
          </span>
        </div>
      );
    } else if (cardData.id === 2) {
      return (
        <div className="absolute top-0 left-0 mt-2 ml-2">
          <span className="bg-red-500 text-white py-1 px-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 0 1 1 1v5.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42L9 9.59V4a1 1 0 0 1 1-1z"
              />
              <path
                fillRule="evenodd"
                d="M4 12a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2H4z"
              />
            </svg>
            Best Seller
          </span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative">
      <div className="absolute left-30 text-gray-500 bg-white rounded-full border-2 px-3 py-1 m-2 mt-32 z-10">
        {cardData.id}
      </div>
      <div className="relative rounded overflow-hidden bg-white shadow-lg w-10/12 m-4 flex flex-col md:flex-row">
        {renderBestLabel()}
        <div className="md:w-1/3 p-10">
          <img
            className="w-full h-auto object-cover m-4"
            src={cardData.image}
            alt="Card"
          />
          <span className="block text-center">Builder- {cardData.id}</span>
        </div>
        <div className="flex flex-col justify-between w-full md:w-2/3 px-6 py-4">
          <div>
            <span className="font-bold text-base mb-2">
              {cardData.initial.title} -
            </span>
            <span className="text-base mb-2">
              {cardData.initial.description}
            </span>
            <div className="font-bold text-base m-2">{cardData.title}</div>
            <p className="text-gray-700 text-base">{getDescription()}</p>
          </div>
          <button
            className="text-blue-500 hover:text-blue-700 w-28 h-10 flex items-center"
            onClick={toggleShowMore}
          >
            {showMore ? "Show Less" : "Show More"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="px-6 pt-4 pb-2 md:pt-0 md:pl-0 md:w-1/3">
          <div className="flex items-center ">
            <div className="w-32 h-30 bg-blue-100 rounded-b-lg flex-col flex items-center justify-center mb-6 mr-4">
              <div className="text-xl text-blue-600">
                {cardData.ratingNumber}
              </div>
              <div className="text-xl text-yellow-500">{cardData.rating}</div>
              <div className="text-blue-600 text-base">
                {cardData.ratingText}
              </div>
            </div>
          </div>
          <i className="justify-center flex w-11/12 h-10 bg-blue-500 rounded-full px-3 py-2 text-sm font-semibold text-white mt-16">
            {cardData.tag}
          </i>
        </div>
      </div>
    </div>
  );
};

export default Card;
