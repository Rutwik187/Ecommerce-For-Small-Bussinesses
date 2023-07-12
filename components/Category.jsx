import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Category = ({ category: { image, name, slug } }) => {
  return (
    <div>
      <Link href={`/category/${slug.current}`}>
        <div className="product-card">
          <img src={urlFor(image).url()} className="product-image" />
          <p className="product-name">{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Category;
