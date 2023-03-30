import React from "react";

const Card = ({ key, person }) => {
  return (
    <div className="flex flex-col m-2 sm:flex-row  sm:-mx-2 mx-2 lg:p-4 lg:my-2">
      <div className="w-60 h-60 mx-2 ">
        <div className="bg-white p-8 border-4 border-indigo-300 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
          <img
            className="h-14 fill-current rounded-full"
            src={person.picture.thumbnail}
          />

          <div className="mt-4 font-bold">
            {person?.name?.first + " " + person?.name?.last}
          </div>

          <div className="mt-2 text-sm text-center">
            I am From {person?.location.country}
          </div>
          <div className="text-center mt-2 text-gray-600 text-sm">
            {person?.cell}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
