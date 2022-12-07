import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { exploreData } from "../utils/data";
import ItemCard from "./ItemCard";

import { Title } from "./StyleComponents";

const Explore = () => {
  return (
    <div className="py-[70px] bg-white">
      <div className="max-w-[1024px] lg:mx-auto mx-2">
        <div className="flex justify-between items-center md:flex-row flex-col md:gap-0 gap-5">
          <Title color={"text-black"}>Explore NFTs</Title>
          <div className="flex md:gap-5 gap-1 justify-evenly items-center flex-wrap">
            <button
              className="w-[140px] h-[50px] border-[1px] border-[#D01498] text-[#D01498] flex gap-2 items-center
            rounded-md justify-center"
            >
              <AiOutlineBars size={20} />
              <h1 className="font-raleway font-semibold">All NFTs</h1>
            </button>
            <button
              className="w-[140px] h-[50px] border-[1px] border-gray-400 text-black flex gap-2 items-center
            rounded-md justify-center hover:border-[#D01498] hover:text-[#D01498] transition-all duration-200 
            ease-in-out"
            >
              <HiBars3CenterLeft size={20} />
              <h1 className="font-raleway font-semibold">Scale Type</h1>
            </button>
            <button
              className="w-[140px] h-[50px] border-[1px] border-gray-400 text-black flex gap-2 items-center
            rounded-md justify-center hover:border-[#D01498] hover:text-[#D01498] transition-all duration-200 
            ease-in-out"
            >
              <RiBarChartHorizontalLine size={20} />
              <h1 className="font-raleway font-semibold">Fixd Price</h1>
            </button>
          </div>
        </div>

        <div className="mt-5 w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          {exploreData.map((data, index) => (
            <ItemCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
