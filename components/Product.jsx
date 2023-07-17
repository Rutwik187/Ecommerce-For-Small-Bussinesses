import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({
  product: { image, name, slug, listPrice, discountedPrice, quantityMass },
}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div
          className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer h-full"
          style={{
            border: "0.5px solid rgb(232, 232, 232)",
            boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
            borderRadius: "8px",
          }}
        >
          <img
            width={500}
            height={500}
            src={urlFor(image[0]).url()}
            alt={name}
          />
          <div className="p-4 text-black/[0.9]">
            <h2 className="text-lg font-medium">{name}</h2>
            <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                &#8377;{discountedPrice}
              </p>

              <p className="text-base  font-medium line-through">
                &#8377;{listPrice}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {Math.round(((listPrice - discountedPrice) / listPrice) * 100) +
                  " % OFF"}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
