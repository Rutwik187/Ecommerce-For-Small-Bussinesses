import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
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
      <button
        onClick={() => {
          console.log({ item: { ...product } });
          dispatch(addToCart({ item: { ...product } }));
        }}
        class="absolute end-4 top-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75 z-50"
      >
        <span class="sr-only">Add to the Cart</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
      <Link href={`/product/${product.slug.current}`}>
        <div>
          <img
            width={500}
            height={500}
            src={urlFor(product.image[0]).url()}
            alt={product.name}
          />
          <div className="p-4 text-black/[0.9]">
            <h2 className="text-lg font-medium">{product.name}</h2>
            <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                &#8377;{product.discountedPrice}
              </p>

              <p className="text-base  font-medium line-through">
                &#8377;{product.listPrice}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {Math.round(
                  ((product.listPrice - product.discountedPrice) /
                    product.listPrice) *
                    100
                ) + " % OFF"}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
