import React from "react";

const Skeleton = () => {
  return (
    <div>
      <div className=" animate-pulse flexflex-col m-2 sm:flex-row   sm:-mx-2 mx-2 lg:p-4 lg:my-2">
        <div className="w-60 mx-2  ">
          <div className="p-8 border-4 bg-white h  rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
            <img className="h-14 w-14 rounded-full bg-slate-100" />

            <div className="mt-4  bg-slate-100 rounded"></div>

            <div className="mt-2 h-2 bg-slate-200 rounded"></div>
            <div className="bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
