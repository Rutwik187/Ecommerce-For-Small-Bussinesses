import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import Category from "./Category";

const RelatedProducts = ({ products }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 8000, stopOnMouseEnter: true }),
    WheelGesturesPlugin(),
  ]);

  return (
    <div className="embla mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {products.map((product) => (
            <div className="embla__product-slide">
              <Product key={product._id} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
