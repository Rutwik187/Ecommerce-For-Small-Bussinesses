import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { urlFor } from "../lib/client";

const MiniBanners = ({ miniBanner }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay(),
    WheelGesturesPlugin(),
  ]);

  return (
    <div className="embla mt-16">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {miniBanner?.map((item, index) => (
            <div className="embla__mini-slide" key={index}>
              <img src={urlFor(item.image).url()} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniBanners;
