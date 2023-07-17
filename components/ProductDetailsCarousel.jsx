import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { urlFor } from "../lib/client";

const ProductDetailsCarousel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images?.map((img, index) => (
          <img key={index} src={urlFor(img).url()} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
