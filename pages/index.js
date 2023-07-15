import React from 'react';

import { client } from '../lib/client';
import { Product, HeroBanner, Category } from '../components';
import MiniBanners from '../components/MiniBanners';

const Home = ({ miniBannerData, featureProductsData, bannerData, categories }) => (
  <div>

    <HeroBanner heroBanner={bannerData} />
    <MiniBanners miniBanner={miniBannerData} />

    {/* Categories  */}

    <div className="products-heading mt-10 md:mt-20">
      <h2>Product Categories</h2>
      <p>Categories of product we have</p>
    </div>

    <div className="products-container mb-10 md:mb-20">
      {categories?.map((category) => <Category key={category._id} category={category} />)}
    </div>

    {/* Featured Products */}

    <div className="products-heading  mb-10 md:mb-20">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container mb-10 md:mb-20">
      {featureProductsData?.map((product) => <Product key={product._id} product={product} />)}
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
