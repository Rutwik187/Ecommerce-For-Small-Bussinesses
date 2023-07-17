import React, { useState } from 'react';

import { client } from '../../lib/client';
import { Product, RelatedProducts } from '../../components';

import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "../../components/Wrapper";
import ProductDetailsCarousel from "../../components/ProductDetailsCarousel";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from '../../components/RichTextComponent';


// import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProductDetails = ({ product, products }) => {
  const { image, name, description, listPrice, discountedPrice } = product;
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };



  return (
    <div>
      <div className="w-full md:py-20">
        <ToastContainer />
        <Wrapper>
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/* left column start */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              <ProductDetailsCarousel images={image} />
            </div>
            {/* left column end */}

            {/* right column start */}
            <div className="flex-[1] py-3">
              {/* PRODUCT TITLE */}
              <div className="text-[34px] font-semibold mb-2 leading-tight">
                {name}
              </div>

              {/* PRODUCT SUBTITLE */}
              <div className="text-lg font-semibold mb-5">
                {name}
              </div>

              {/* PRODUCT PRICE */}
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold">
                  MRP : &#8377;{discountedPrice}
                </p>
                {listPrice && (
                  <>
                    <p className="text-base  font-medium line-through">
                      &#8377;{listPrice}
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                      {Math.round(((listPrice - discountedPrice) / listPrice) * 100)}
                      % off
                    </p>
                  </>
                )}
              </div>

              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also includes all applicable duties)`}
              </div>



              {/* ADD TO CART BUTTON START */}
              <button
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                onClick={() => {
                  console.log(product)
                  dispatch(
                    addToCart({
                      ...product,
                      oneQuantityPrice: discountedPrice,
                    })
                  );
                  notify();

                }}

              >
                Add to Cart
              </button>
              {/* ADD TO CART BUTTON END */}

              {/* WHISHLIST BUTTON START */}
              {/* <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Whishlist
                <IoMdHeartEmpty size={20} />
              </button> */}
              {/* WHISHLIST BUTTON END */}

              <div>
                <div className="text-lg font-bold mb-5">
                  Product Details
                </div>
                <div className="markdown text-md mb-5">

                  <PortableText
                    // Pass in block content straight from Sanity.io
                    value={description}
                  // components={RichTextComponent}
                  />
                </div>
              </div>
            </div>
            {/* right column end */}
          </div>

          <RelatedProducts products={products} />

          {/* <div className="maylike-products-wrapper">
            <h2>You may also like</h2>
            <div className="marquee">
              <div className="maylike-products-container track">
                {products.map((item) => (
                  <Product key={item._id} product={item} />
                ))}
              </div>
            </div>
          </div> */}
        </Wrapper>
      </div>


    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);



  return {
    props: { products, product }
  }
}

export default ProductDetails