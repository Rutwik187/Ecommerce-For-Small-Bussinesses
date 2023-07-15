import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({
  product: { image, name, slug, listPrice, discountedPrice },
}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div
          className="group relative block overflow-hidden  bg-white p-4 sm:w-52 "
          style={{
            border: "0.5px solid rgb(232, 232, 232)",
            boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
            borderRadius: "8px",
          }}
        >
          <div className="absolute end-0 top-0 z-10 ">
            <span className="whitespace-nowrap bg-green-400 px-3 py-1.5 text-xs font-medium text-white">
              {Math.round(((listPrice - discountedPrice) / listPrice) * 100)}%
              OFF
            </span>
          </div>

          <img
            src={urlFor(image[0]).url()}
            alt=""
            className="h-64 w-56 object-contain transition duration-500 group-hover:scale-105 sm:h-32 "
          />
          <h3 className="mt-4 text-base font-bold text-gray-900">
            Robot className
          </h3>
          <span className="text-sm text-slate-600 ">25g</span>

          <div className="relative  py-3 flex justify-between items-center">
            <div>
              <p className="flex flex-col">
                <span className="text-base font-medium  text-slate-900">
                  ₹{discountedPrice}
                </span>
                <span className="text-sm text-slate-400 line-through">
                  ₹{listPrice}
                </span>
              </p>
            </div>
            <button
              href="#"
              class="flex items-center rounded-md bg-green-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              ADD
            </button>

            {/* <button className=" w-[66px] h-[31px] rounded-md border-2 border-green-500  p-5 text-sm font-medium transition hover:scale-105 flex items-center justify-center text-green-500">
              ADD
            </button> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
