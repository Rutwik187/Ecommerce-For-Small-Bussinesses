import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product, Category } from '../../components';
import { useStateContext } from '../../context/StateContext';

const Products = ({ categories, products }) => {
    // const { image, name, sellingPrice } = products;


    return (
        <div>
            { }
            <div className="products-heading">
                <h2>Best Seller Products</h2>

            </div>

            <div className="products-container">
                {products?.map((product) => <Product key={product._id} product={product} />)}
            </div>

            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {categories.map((item) => (
                            <Category key={item._id} category={item} />
                        ))}
                    </div>
                </div>
            </div>
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



    return {
        props: { products, categories }
    }
}

export default Products