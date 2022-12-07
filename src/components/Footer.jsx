import React from "react";
import {
  BsDiscord,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import { FaAngleDoubleRight, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="w-full py-[50px] border-b-[1px] border-gray-700">
        <div className="max-w-[1024px] lg:mx-auto mx-2">
          <div
            className="lg:max-w-full max-w-[600px] sm:mx-auto mx-2 flex justify-between items-start gap-[25px] 
            lg:flex-row flex-col"
          >
            <div className="lg:w-[200px] w-full">
              <h1 className="font-poppins font-bold sm:text-2xl text-xl text-white">
                Our Address
              </h1>
              <p className="font-raleway sm:text-lg text-base font-medium text-gray-400 my-[10px]">
                4 Grand Central Terminal New York, NY 10 City name, CA 90896
                USA. contact@example.com
              </p>
              <div className="sm:max-w-[200px] max-w-[300px] flex justify-between items-center my-[15px]">
                <BsDiscord
                  size={24}
                  className="text-gray-500 hover:text-[#647ECB] cursor-pointer"
                />
                <BsFacebook
                  size={24}
                  className="text-gray-500 hover:text-[#647ECB] cursor-pointer"
                />
                <BsTwitter
                  size={24}
                  className="text-gray-500 hover:text-[#647ECB] cursor-pointer"
                />
                <BsLinkedin
                  size={24}
                  className="text-gray-500 hover:text-[#647ECB] cursor-pointer"
                />
                <BsInstagram
                  size={24}
                  className="text-gray-500 hover:text-[#647ECB] cursor-pointer"
                />
              </div>
            </div>

            <div className="lg:w-[200px] w-full">
              <h1 className="font-poppins font-bold sm:text-2xl text-xl text-white">
                Useful Links
              </h1>
              <div className="my-[10px] flex flex-col gap-1">
                <div className="flex gap-[2px] items-center">
                  <FaAngleDoubleRight size={14} className="text-gray-600" />
                  <a
                    href="#"
                    className="text-gray-400 font-raleway sm:text-lg text-base font-medium hover:text-gray-600 
                  cursor-pointer transition-all duration-200 ease-in-out"
                  >
                    Collectibles
                  </a>
                </div>
                <div className="flex gap-[2px] items-center">
                  <FaAngleDoubleRight size={14} className="text-gray-600" />
                  <a
                    href="#"
                    className="text-gray-400 font-raleway sm:text-lg text-base font-medium hover:text-gray-600 
                  cursor-pointer transition-all duration-200 ease-in-out"
                  >
                    Photography
                  </a>
                </div>
                <div className="flex gap-[2px] items-center">
                  <FaAngleDoubleRight size={14} className="text-gray-600" />
                  <a
                    href="#"
                    className="text-gray-400 font-raleway sm:text-lg text-base font-medium hover:text-gray-600 
                  cursor-pointer transition-all duration-200 ease-in-out"
                  >
                    Trading Cards
                  </a>
                </div>
                <div className="flex gap-[2px] items-center">
                  <FaAngleDoubleRight size={14} className="text-gray-600" />
                  <a
                    href="#"
                    className="text-gray-400 font-raleway sm:text-lg text-base font-medium hover:text-gray-600 
                  cursor-pointer transition-all duration-200 ease-in-out"
                  >
                    Virtual Worlds
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-[200px] w-full">
              <h1 className="font-poppins font-bold sm:text-2xl text-xl text-white">
                Our Policy
              </h1>
              <div className="my-[10px] flex flex-col gap-1 ">
                <div className="flex gap-[2px] items-center">
                  <FaAngleDoubleRight size={14} className="text-gray-600" />
                  <a
                    href="#"
                    className="text-gray-400 font-raleway sm:text-lg text-base font-medium hover:text-gray-600 
                  cursor-pointer transition-all duration-200 ease-in-out"
                  >
                    Help Center
                  </a>
                </div>
                <div className="flex gap-[2px] items-center">
                  <FaAngleDoubleRight size={14} className="text-gray-600" />
                  <a
                    href="#"
                    className="text-gray-400 font-raleway sm:text-lg text-base font-medium hover:text-gray-600 
                  cursor-pointer transition-all duration-200 ease-in-out"
                  >
                    My Collections
                  </a>
                </div>
                <div className="flex gap-[2px] items-center">
                  <FaAngleDoubleRight size={14} className="text-gray-600" />
                  <a
                    href="#"
                    className="text-gray-400 font-raleway sm:text-lg text-base font-medium hover:text-gray-600 
                  cursor-pointer transition-all duration-200 ease-in-out"
                  >
                    Platform Status
                  </a>
                </div>
                <div className="flex gap-[2px] items-center">
                  <FaAngleDoubleRight size={14} className="text-gray-600" />
                  <a
                    href="#"
                    className="text-gray-400 font-raleway sm:text-lg text-base font-medium hover:text-gray-600 
                  cursor-pointer transition-all duration-200 ease-in-out"
                  >
                    Newsletter
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-[200px] w-full">
              <h1 className="font-poppins font-bold sm:text-2xl text-xl text-white">
                Stay Informed By Newsletter
              </h1>
              <p className="font-raleway sm:text-lg text-base font-medium text-gray-400 my-[10px]">
                *Subscribe to our newsletter to receive early discount offers
                and updates.
              </p>
              <div className="lg:max-w-[200px] max-w-[300px] mt-[2px] h-[45px] bg-white rounded-md overflow-hidden flex">
                <input
                  type="text"
                  className="h-[40px] w-3/4 bg-white border-none outline-none pl-[10px]"
                />
                <button className="w-1/4 h-full bg-white flex justify-center items-center">
                  <FaTelegramPlane
                    size={26}
                    className="text-[#647ECB] hover:text-black"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-[25px]">
        <div className="max-w-[1024px] lg:mx-auto mx-2">
          <div className="w-full flex justify-between items-center gap-[10px] lg:flex-row flex-col">
            <h1
              className="font-raleway sm:text-lg xs:text-sm text-xs text-white font-normal
            lg:text-start text-center"
            >
              Copyright by ModelTheme. All Rights Reserved.
            </h1>
            <h1
              className="font-raleway sm:text-lg xs:text-sm text-xs text-white font-normal
            lg:text-start text-center"
            >
              Elite Author on ThemeForest.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
