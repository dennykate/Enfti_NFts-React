import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";

import Logo from "../assets/logo.svg";
import { navbarData } from "../utils/data";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div
        className="w-full h-[100px] lg:justify-between justify-center lg:gap-0 gap-5
     items-center lg:flex-row flex-col md:flex hidden lg:px-0 sm:px-5 px-2 z-10"
      >
        <img src={Logo} alt="logo" className="w-[130px]" />
        <div className="flex gap-[100px]">
          <ul className=" list-none flex gap-6">
            {navbarData.map((data, index) => (
              <li
                key={index}
                className=" font-raleway text-white text-sm cursor-pointer hover:text-[#254798] 
        transition-all duration-500 ease-in-out font-semibold"
              >
                {data}
              </li>
            ))}
          </ul>
          <div className="flex">
            <BiSearch
              size={23}
              className=" text-blue-500 hover:text-blue-800 transition-all duration-500 ease-in-out cursor-pointer"
            />
            <h6 className=" font-raleway font-semibold text-white cursor-pointer">
              Sign In
            </h6>
          </div>
        </div>
      </div>

      <div className="w-full md:hidden relative z-50">
        <div className="absolute top-0 left-0 w-full z-50">
          <div className="w-full h-[60px] flex justify-between items-center  px-2  ">
            <img src={Logo} alt="logo" className="w-[100px] z-10" />
            <div className="flex gap-5 items-center z-10">
              <button className="btn p-2 rounded-full">
                <IoPersonCircleSharp size={23} color="white" />
              </button>
              <BiSearch
                size={25}
                className=" text-blue-500 hover:text-blue-800 transition-all duration-500 ease-in-out"
              />
              <HiBars3
                color="white"
                size={30}
                onClick={() => setShowMenu(!showMenu)}
              />
            </div>
          </div>

          <div
            className={`w-full overflow-hidden bg-white md:hidden block z-50
      ${
        showMenu ? "sm:h-[600px] h-[500px]" : "h-0"
      } transition-all duration-500 ease-in-out`}
          >
            <ul className="list-none z-10">
              {navbarData.map((data, index) => (
                <li
                  key={index}
                  className="w-full sm:px-5 px-3 py-5 border-b-[1px] border-gray-300 
                flex items-center justify-between z-50"
                >
                  <h6 className="font-raleway font-semibold sm:text-lg text-base text-gray-500 tracking-wide">
                    {data}
                  </h6>
                  <button className="sm:p-1 p-[2px] border-[3px] rounded-sm border-gray-400">
                    <MdKeyboardArrowDown
                      className="sm:text-3xl text-xl"
                      color="black"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
