import React from "react";
import { sponsersData } from "../utils/data";

const Sponsers = () => {
  return (
    <div className="w-full bg-black  border-b-[1px] border-gray-700">
      <div className="max-w-[1024px] lg:mx-auto mx-2 py-[25px]">
        <div className="w-full grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-5">
          {sponsersData.map((data, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={data}
                alt="sponser"
                className="sm:h-[55px] h-[40px] md:opacity-70 opacity-100 hover:opacity-100 transition-all duration-200 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
