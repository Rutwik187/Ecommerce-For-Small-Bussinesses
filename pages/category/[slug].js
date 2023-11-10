

import React from 'react';
import { Product, Category, Footer, RelatedProducts } from '../../components';
import { client, urlFor } from '../../lib/client';
import Header from '../../components/Header';



const Products = ({ categories, products, infoData, productData, featuredProducts }) => {
    return (
        <div>
            <Header product={productData} info={infoData} categories={categories} />
            <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <h2 className='text-[28px] md:text-[34px] font-semibold leading-tight'>Products</h2>
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

export const getServerSideProps = async ({ params: { slug } }) => {
    // Fetch categories and the selected category data
    const categoriesQuery = `*[_type == "category"]`;
    const categories = await client.fetch(categoriesQuery);

    const categoryQuery = `*[_type == "category" && slug.current == '${slug}'][0]`;
    const categoryData = await client.fetch(categoryQuery);

    // Fetch products related to the selected category
    const productsQuery = `*[_type == "product" && category._ref == '${categoryData._id}']`;
    const products = await client.fetch(productsQuery);

    // Fetch additional data
    const productData = await client.fetch(`*[_type == "product"]`);
    const infoData = await client.fetch(`*[_type == "info"]`);
    const featuredProducts = await client.fetch(`*[_type == "product" && featureProduct == true]`);

    return {
        props: { categories, products, slug, infoData, productData, featuredProducts }
    };
}

export default Products;
