import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { asset } from "../temp_assets/flat-design-online-shop-logo-collection/5354481.jpg";

const Product = ({ product }) => {
  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const count = 1;
  const dispatch = useDispatch();
  return (
    <div
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer h-full mx-auto relative"
      style={{
        border: "0.5px solid rgb(232, 232, 232)",
        boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
        borderRadius: "8px",
      }}
    >
      <div className="absolute end-0 top-0 rounded-lg bg-green-500 text-gray-100 transition  z-50 flex items-center justify-center duration-200 hover:scale-105 p-2">
        <p className=" text-xs font-base">
          {Math.round(
            ((product.listPrice - product.discountedPrice) /
              product.listPrice) *
              100
          ) + " % OFF"}
        </p>
      </div>
      <div className="flex flex-col justify-between h-full">
        <Link href={`/product/${product.slug.current}`}>
          <img
            className="w-[16rem] h-[16rem] object-contain m-2"
            // width={500}
            // height={500}
            src={urlFor(product.image[0]).url()}
            alt={product.name}
          />
        </Link>
        <div className="p-4 text-black/[0.9] flex flex-col gap-2">
          <Link href={`/product/${product.slug.current}`}>
            <h2 className="text-lg font-medium">{product.name}</h2>
          </Link>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">
              &#8377;{product.discountedPrice}
            </p>

            <p className="text-base  font-medium line-through">
              &#8377;{product.listPrice}
            </p>

            <button
              onClick={() => {
                dispatch(addToCart({ item: { ...product, count } }));
                notify();
              }}
              className=" ml-auto  py-2 px-3 rounded-lg bg-green-500 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
