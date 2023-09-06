import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  increaseCount,
  decreaseCount,
  removeFromCart,
} from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { urlFor } from "../lib/client";
const CartItem = ({ data }) => {
  const {
    image,
    name,
    count,
    quantity,
    listPrice,
    discountedPrice,
    _id,
    quantityNum,
  } = data;

  const dispatch = useDispatch();

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}

      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img
          className="w-28 h-28 object-contain"
          src={urlFor(image[0]).url()}
          alt={name}
          width={120}
          height={120}
        />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {name}
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {quantity}
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : &#8377;{discountedPrice}
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {quantity}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div class=" flex items-center justify-center">
                <label class="mr-2 text-lg font-semibold" for="count">
                  Quantity:
                </label>
                <div class="flex items-center mt-1">
                  <button
                    onClick={() => {
                      dispatch(decreaseCount({ id: _id }));
                    }}
                    className="  text-lg font-medium transition-transform active:scale-95  hover:opacity-75"
                  >
                    <svg
                      className="h-7 w-7"
                      fill="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                  <span className="text-gray-900 text-xl mx-2 font-semibold">
                    {count}
                  </span>
                  <button
                    onClick={() => dispatch(increaseCount({ id: _id }))}
                    class="text-gray-500 focus:outline-none focus:text-gray-600"
                  >
                    <svg
                      className="h-7 w-7"
                      fill="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromCart({ id: _id }))}
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
