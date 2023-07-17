import React from 'react';

import { client } from '../lib/client';
import { Product, HeroBanner, Category } from '../components';
import MiniBanners from '../components/MiniBanners';


const Home = ({ miniBannerData, featureProductsData, bannerData, categories }) => (
  <div>

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



  return {
    props: { miniBannerData, featureProductsData, categories, bannerData }
  }
}

export default Home;
