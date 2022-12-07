import React from "react";
import { collectorsData } from "../utils/data";
import { Title } from "./StyleComponents";

const Collectors = () => {
  return (
    <div className="py-[70px] bg-[#FAFAFA]">
      <div className="max-w-[1024px] lg:mx-auto mx-2">
        <Title color={"text-black"}>Trending Collectors</Title>
        <h6 className="my-[10px] font-raleway sm:text-base text-sm text-[#636363] font-light">
          Fine art collectors are in a upward this week
        </h6>
        <div className="w-full grid lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-5">
          {collectorsData.map(({ image, name, items }, index) => (
            <div
              key={index}
              className="bg-white sm:px-[20px] sm:py-[10px] p-[10px] items-center 
                shadow-sm flex justify-between rounded-sm group"
            >
              <div className="flex gap-[1px]">
                <img
                  src={image}
                  alt="collector-profile"
                  className="w-[50px] h-[50px] rounded-full group-hover:-translate-y-[5px] 
                  transition-all duration-500 ease-in-out"
                />
                <div className="flex flex-col justify-between">
                  <h1
                    className="font-raleway text-black md:text-xl text-lg font-bold hover:text-[#657FCB] 
                    transition-all duration-200 ease-in-out cursor-pointer"
                  >
                    {name}
                  </h1>
                  <h6 className="font-raleway text-[#898989] md:text-base text-sm font-medium">
                    {items} items
                  </h6>
                </div>
              </div>
              <h1 className="font-raleway sm:text-[50px] text-[30px] font-bold text-[#F0F0F0]">
                {index + 1}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collectors;
