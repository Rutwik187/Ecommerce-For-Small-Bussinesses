import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product, Category, Footer } from '../../components';


import { RelatedProducts } from '../../components';
import Header from '../../components/Header';

const Products = ({ categories, products, slug, infoData, productData, featuredProducts }) => {
    // const { image, name, sellingPrice } = products;


    return (
        <div>
            <Header product={productData} info={infoData} />
            <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <h2 className='text-[28px] md:text-[34px]  font-semibold leading-tight'>Products</h2>

                </div>

                <div className="grid grid-cols-1 sm:2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
                    {products?.map((product) => <Product key={product._id} product={product} />)}
                </div>
            </div>

            <RelatedProducts products={featuredProducts} />

            <Footer info={infoData} />
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "category"] {
    slug {
      current
    }
  }
  `;

    const categories = await client.fetch(query);

    const paths = categories.map((category) => ({
        params: {
            slug: category.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const category = `*[_type == "category" && slug.current == '${slug}'][0]`
    const categoryData = await client.fetch(category)
    const query = `*[_type == "product" && category._ref == '${categoryData._id}']`;
    const categoriesQuery = '*[_type == "category"]'

    const products = await client.fetch(query);
    const categories = await client.fetch(categoriesQuery);

    const productData = await client.fetch(`*[_type=="product"]`)
    const infoData = await client.fetch(`*[_type=="info"]`)

    const featuredProducts = await client.fetch(`*[_type == "product" && featureProduct == true]`)



    return {
        props: { products, categories, slug, infoData, productData, featuredProducts }
    }
}

export default Products