import React from "react";
import { hottestBidsData, newsData } from "../utils/data";
import ItemCard from "./ItemCard";
import { Button, Title } from "./StyleComponents";

const BidsAndNews = () => {
  return (
    <div className="py-[70px] bg-white">
      <div className="max-w-[1024px] lg:mx-auto mx-2">
        <div className="w-full mb-[100px]">
          <Title color="text-black">Hottest Bids</Title>
          <div className="mt-[30px] w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
            {hottestBidsData.map((data, index) => (
              <ItemCard key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <Title color="text-black">Latest News</Title>
          <div className="mt-[30px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-10">
            {newsData.map(({ image, title, paragraph, date }, index) => (
              <div
                key={index}
                className={`shadow-md ${
                  index == 2 && "lg:col-span-1 md:col-span-2 col-span-1"
                }`}
              >
                <div className="w-full relative group">
                  <img src={image} className="w-full" />
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-black group-hover:bg-opacity-60 
                  bg-opacity-0 transition-all duration-500 ease-in-out flex justify-center items-center"
                  >
                    <div
                      className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-500 ease-in-out"
                    >
                      <Button>READ MORE</Button>
                    </div>
                  </div>
                </div>
                <div className="sm:p-[20px] py-[10px] px-[5px]">
                  <h1 className="font-raleway text-gray-400 text-sm font-medium">
                    {date}
                  </h1>
                  <h1
                    className="font-raleway text-xl text-black font-semibold mt-[5px] cursor-pointer
                  hover:text-[#657FCB] transition-all duration-200 ease-in-out"
                  >
                    {title}
                  </h1>
                  <h1 className="font-raleway text-base text-gray-500 mt-[5px]">
                    {paragraph}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidsAndNews;
