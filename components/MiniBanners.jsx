import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { urlFor } from "../lib/client";

const MiniBanners = ({ miniBanner }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 8000, stopOnMouseEnter: true }),
    WheelGesturesPlugin(),
  ]);

  return (
    <div className="embla mt-6 md:mt-16">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {miniBanner?.map((item, index) => (
            <div key={index} className="embla__mini-slide">
              <a target="_blank" href={item.linkTo}>
                <img
                  className="rounded-xl"
                  src={urlFor(item.image).url()}
                  alt=""
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniBanners;
