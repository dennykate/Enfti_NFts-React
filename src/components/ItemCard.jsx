import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { Button } from "./StyleComponents";

const ItemCard = ({ data: { image, name, price } }) => {
  return (
    <div className="p-[15px] shadow-md relative group">
      <img src={image} alt="explore" className="w-full" />
      <div
        className="w-full h-[50px] mt-[20px] border-b-[1px] border-gray-300 flex justify-between items-start 
      sm:px-[5px] px-0"
      >
        <h1 className="font-raleway text-black text-lg font-semibold truncate z-10">
          {name}
        </h1>
        <button className="text-black hover:text-[#647ECB] transition-all duration-200 ease-in-out z-10">
          <AiOutlineHeart size={28} />
        </button>
      </div>
      <div className="w-full h-[70px] flex justify-start items-start flex-col sm:px-[5px] px-0">
        <h6 className="font-raleway text-gray-500 text-sm font-medium mt-[15px] z-10">
          Reserve Price
        </h6>
        <h1 className="font-raleway text-black text-base font-bold">{price}</h1>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center
      opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 
      ease-in-out"
      >
        <Button>
          <TiShoppingCart size={25} color="white" className="inline" /> ADD TO
          CART
        </Button>
      </div>
    </div>
  );
};

export default ItemCard;
