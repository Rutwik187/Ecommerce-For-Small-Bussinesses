import React from 'react'
import Header from '../components/Header'
import { Footer } from '../components'
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from '../components/RichTextComponent';
import { urlFor } from '../lib/client';
import { client } from '../lib/client';

const about = ({ productData, infoData, categories }) => {
    return (
        <>
            <Header product={productData} info={infoData} categories={categories} />
            <section className="py-10 lg:py-20  font-poppins">
                <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-full lg:mb-0 ">
                            <div className="lg:max-w-full">
                                <div className="px-4 pl-4 mb-6 border-l-4 border-gray-700">
                                    <span className="text-sm text-gray-600 uppercase ">Who we are?</span>
                                    <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl ">
                                        About Us
                                    </h1>
                                </div>
                                <p className="px-4 mb-10 text-base leading-7 text-gray-500 ">
                                    <PortableText
                                        // Pass in block content straight from Sanity.io
                                        value={infoData[0]?.aboutUs}
                                        components={RichTextComponent}
                                    />
                                </p>

                            </div>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-full lg:mb-0">
                            <img src={infoData[0] ? urlFor(infoData[0].shopImg).url() : ""} alt="About Us"
                                className="relative  object-contain w-full h-full rounded" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer info={infoData} />
        </>
    )
}
export const getServerSideProps = async () => {

    const productData = await client.fetch(`*[_type=="product"]`)
    const infoData = await client.fetch(`*[_type=="info"]`)

    const categoryQuery = '*[_type == "category"]';
    const categories = await client.fetch(categoryQuery);


    return {
        props: { infoData, productData, categories }
    }

}

export default about