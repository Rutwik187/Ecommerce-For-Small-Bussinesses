import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import Category from "./Category";

const RelatedProducts = ({ products }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1000, stopOnMouseEnter: false }),
    // WheelGesturesPlugin(),
  ]);

  return (
    <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
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
    </div>
  );
};
// export const getStaticProps = async ({ params: { slug } }) => {

//   return {
//       props: { products, categories, slug }
//   }
// }
export default RelatedProducts;
