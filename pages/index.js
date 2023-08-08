import React from 'react';

import { client } from '../lib/client';
import { Product, HeroBanner, Category, Footer } from '../components';
import MiniBanners from '../components/MiniBanners';
import Header from '../components/Header';
import Brands from '../components/Brands';
import { RiWhatsappFill } from "react-icons/ri";
import { IconContext } from "react-icons";



const Home = ({ miniBannerData, featureProductsData, bannerData, categories, productData, brandData, infoData }) => (
  <div >
    <Header product={productData} info={infoData} categories={categories} />

    <HeroBanner heroBanner={bannerData} />
    <MiniBanners miniBanner={miniBannerData} />

    {/* Categories  */}

    <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
      <div className="text-center max-w-[800px] mx-auto my-[30px] md:my-[80px]">
        <h2 className='text-[28px] md:text-[34px]  font-semibold leading-tight'>Shop by categories</h2>

      </div>

      <div className="flex flex-wrap gap-5  px-5 md:px-0 items-center justify-center">
        {categories?.map((category) => <Category key={category._id} category={category} />)}
      </div>
    </div>

    {/* Featured Products */}

    <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
      <div className="text-center max-w-[800px] mx-auto my-[30px] md:my-[80px]">
        <h2 className='text-[28px] md:text-[34px]  font-semibold leading-tight'>Our Featured Products</h2>

      </div>

      <div className="grid grid-cols-1 sm:2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-14 px-5 md:px-0">
        {featureProductsData?.map((product) => <Product key={product._id} product={product} />)}
      </div>
    </div>

    {/* Brand Data */}
    <div className='w-full  px-5 md:px-10 mx-auto'>
      <div className="text-center max-w-[800px] mx-auto mb-[10px] mt-[30px] md:mb-[30px] md:mt-[60px]">
        <h2 className='text-[28px] md:text-[34px]  font-semibold leading-tight'>Brands We Work With</h2>

      </div>

      <Brands brands={brandData} />
    </div>
    <Footer info={infoData} />
    <a target='_blank' href={`https://wa.me/91${infoData[0].phoneNo}?`}>

      <IconContext.Provider value={{ color: "green" }}>

        <RiWhatsappFill alt="whataspp" className="whatsAppButton" />


      </IconContext.Provider>;
    </a>
  </div>
);

export const getServerSideProps = async () => {


  const featureProducts = `*[_type == "product" && featureProduct == true]`;
  const featureProductsData = await client.fetch(featureProducts);


  const categoryQuery = '*[_type == "category"]';
  const categories = await client.fetch(categoryQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const miniBannerQuery = '*[_type == "miniBanner"]';
  const miniBannerData = await client.fetch(miniBannerQuery);

  const productData = await client.fetch(`*[_type == 'product']`)
  const brandData = await client.fetch(`*[_type=='brand']`)

  const infoData = await client.fetch(`*[_type=="info"]`)



  return {
    props: { miniBannerData, featureProductsData, categories, bannerData, productData, brandData, infoData }
  }
}

export default Home;
