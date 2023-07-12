import React from 'react';

import { client } from '../lib/client';
import { Product, HeroBanner, Category } from '../components';

const Home = ({ featureProductsData, bannerData, categories }) => (
  <div>

    <HeroBanner heroBanner={bannerData} />

    {/* Categories  */}

    <div className="products-heading mt-20">
      <h2>Product Categories</h2>
      <p>Categories of product we have</p>
    </div>

    <div className="products-container mb-20">
      {categories?.map((category) => <Category key={category._id} category={category} />)}
    </div>

    {/* Featured Products */}

    <div className="products-heading mt-20">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container mb-20">
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



  return {
    props: { featureProductsData, categories, bannerData }
  }
}

export default Home;
