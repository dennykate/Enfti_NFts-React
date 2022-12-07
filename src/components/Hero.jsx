import React from "react";
import Navbar from "./Navbar";

import HeroImg from "../assets/hero.jpg";
import { Button } from "./StyleComponents";

const Hero = () => {
  return (
    <div className="w-full bg-black pb-[50px] lg:pb-[100px]">
      <div className="max-w-[1024px]  mx-auto  ">
        <Navbar />

        <div
          className="md:mt-[50px] mt-0 w-full md:flex-row flex-col  flex gap-5 
         bg-black"
        >
          <div className="md:w-[600px] w-full ">
            <img src={HeroImg} alt="hero" className="w-full" />
          </div>
          <div className="md:mt-[80px] sm:mt-[30px] mt-[15px] md:px-0 sm:px-10 px-2 md:w-[374px] w-full">
            <h1 className="lg:text-[55px] sm:text-[30px] text-[20px] font-semibold text-white font-poppins">
              Discover, Collect & Sell{" "}
              <span className="text">Extraordinary</span> NFTs
            </h1>
            <p className=" font-raleway text-[#969696] lg:text-lg sm:text-base text-sm lg:mt-0 mt-2 mb-5">
              The Crypto Monkey is a high-quality collection of 100 unique
              monkeys on the NFTMart marketplace.
            </p>
            <div className="-z-10">
              <Button>DISCOVER</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
