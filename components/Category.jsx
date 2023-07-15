import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Category = ({ category: { image, categoryName, slug } }) => {
  return (
    <div>
      <Link href={`/category/${slug.current}`}>
        <div className="block group w-40 cursor-pointer">
          <img
            src={urlFor(image).url()}
            alt=""
            class="object-cover w-full rounded "
          />

          <div class="mt-3">
            <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 text-center">
              {categoryName}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Category;
