import React from "react";
import { createAndSellData } from "../utils/data";

import { Title } from "./StyleComponents";

const CreateAndSell = () => {
  return (
    <div className="py-[70px] bg-black relative overflow-hidden">
      <div className="max-w-[1024px] lg:mx-auto mx-2 ">
        <div className="w-full sm:mb-[50px] mb-[30px] text-center ">
          <Title color="text-white">Create And Sell Your NFTs</Title>
        </div>
        <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 sm:px-5 px-[2px] z-10">
          {createAndSellData.map(({ Icon, title, paragraph }, index) => (
            <div key={index} className="flex flex-col gap-2">
              <button
                className="w-[60px] h-[60px] bg-[#D01498] flex justify-center items-center rounded-full 
              hover:-translate-y-3 transition-all duration-300 ease-in-out"
              >
                <Icon color="white" size={23} />
              </button>
              <h1 className="font-raleway font-semibold text-white text-xl mt-1">
                {title}
              </h1>
              <h6 className="font-raleway font-medium text-gray-400 z-10">
                {paragraph}
              </h6>
            </div>
          ))}
        </div>
      </div>
      <div className="bgShadow w-[280px] h-[280px] absolute -top-[180px] rounded-full lg:right-0 -right-[100px] -z-0"></div>
      <div className="bgShadow w-[280px] h-[280px] absolute -bottom-[160px] rounded-full left-0"></div>
    </div>
  );
};

export default CreateAndSell;
