import React, { useEffect } from "react";
import Slider from "react-slick";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

import { Title } from "./StyleComponents";
import { carouselData } from "../utils/data";

const Trending = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className=" bg-black ">
      <div className="max-w-[1024px] lg:mx-auto mx-2 pt-[50px] sm:pb-[200px] pb-[150px]">
        <Title color="text-white">Trending Collections</Title>

        <Slider {...settings} className="my-[10px] relative">
          {carouselData.map(({ images, profile, name, items }, index) => (
            <div className="sm:p-3 p-1" key={index}>
              <div className="w-full py-[15px] rounded-md border-b-[2px] border-[#D01498]">
                <div className="w-full grid gap-[5px] grid-cols-2">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="nfts"
                      className="object-cover "
                    />
                  ))}
                </div>
                <div className="w-full h-[40px] flex justify-center items-center">
                  <div className="p-[4px] bg-black rounded-full -translate-y-[20px]">
                    <img
                      src={profile}
                      className="w-[40px] h-[40px] rounded-full"
                    />
                  </div>
                </div>
                <div className="w-full h-[40px] sm:px-3 px-1 flex justify-between items-center flex-wrap">
                  <h1 className="sm:text-xl text-sm font-raleway text-white font-semibold">
                    {name}
                  </h1>
                  <button
                    className="sm:px-4 px-2 py-1 text-gray-400 border-[1px] border-[#f5f5f5] rounded-md font-raleway
                  font-medium sm:text-base text-xs"
                  >
                    {items} items
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Trending;

const NextButton = ({ onClick }) => (
  <button
    className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-white
    absolute bottom-14 sm:right-5 right-2 md:opacity-90 hover:opacity-100 opacity-100"
    onClick={onClick}
  >
    <GoArrowRight size={20} color="black" />
  </button>
);

const PrevButton = ({ onClick }) => (
  <button
    className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-white
    absolute bottom-14 sm:left-5 left-2 z-10 md:opacity-90 hover:opacity-100 opacity-100"
    onClick={onClick}
  >
    <GoArrowLeft size={20} color="black" />
  </button>
);
