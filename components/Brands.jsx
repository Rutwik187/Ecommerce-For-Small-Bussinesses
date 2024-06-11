import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { urlFor } from "../lib/client";

import "react-multi-carousel/lib/styles.css";

const Brands = ({ brands }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnMouseEnter: false }),
    // WheelGesturesPlugin(),
  ]);

  return (
    <div className="embla mt-3 md:mt-8">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {brands?.map((item, index) => (
            <div className="embla__brands-slide" key={index}>
              <img src={urlFor(item.image).url()} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
