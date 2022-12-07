import React from "react";
import {
  FaTelegram,
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaLinkedin,
} from "react-icons/fa";
import { Button } from "./StyleComponents";

const Header = () => {
  return (
    <div className="min-h-[100px] py-5 border-b-[1px] border-[#383A41] bg-black">
      <div
        className="max-w-[1024px] mx-auto h-full flex md:justify-between justify-center gap-5 
        items-center lg:px-0 sm:px-5 px-2 md:flex-row flex-col relative"
      >
        <h6 className=" font-raleway text-white font-normal text-lg md:text-start text-center z-10">
          Discover, find and sell extraordinary NFT with{" "}
          <br className="md:block hidden" /> us.
        </h6>
        <div className="flex gap-5 items-start z-10">
          <ul className=" list-none flex sm:gap-5 gap-3">
            <li>
              <FaTelegram
                size={18}
                className="text-gray-300 hover:text-gray-500 cursor-pointer"
              />
            </li>
            <li>
              <FaFacebook
                size={18}
                className="text-gray-300 hover:text-gray-500 cursor-pointer"
              />
            </li>
            <li>
              <FaTwitter
                size={18}
                className="text-gray-300 hover:text-gray-500 cursor-pointer"
              />
            </li>
            <li>
              <FaDiscord
                size={18}
                className="text-gray-300 hover:text-gray-500 cursor-pointer"
              />
            </li>
            <li>
              <FaLinkedin
                size={18}
                className="text-gray-300 hover:text-gray-500 cursor-pointer"
              />
            </li>
          </ul>
          <Button>CREATE NFT</Button>
        </div>
        <div className="bgShadow w-[250px] h-[250px] absolute -top-[120px] -right-[50px] lg:right-0 "></div>
      </div>
    </div>
  );
};

export default Header;
