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
          dispatch(addToCart({ item: { ...product } }));
          notify();
        }}
        class="absolute end-4 top-4 rounded-full bg-gray-100 text-gray-900 transition hover:text-gray-900/75 z-50 w-16 h-16 flex items-center justify-center duration-200 hover:scale-105 "
        style={{
          border: "0.5px solid rgb(232, 232, 232)",
          boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
        }}
        title="Add to cart"
      >
        <span class="sr-only">Add to the Cart</span>

        <img
          width={30}
          src="https://www.svgrepo.com/show/215123/shopping-cart-add.svg"
          alt=""
        />
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
