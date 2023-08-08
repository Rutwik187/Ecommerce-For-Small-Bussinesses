import React from 'react'
import Header from '../../components/Header'
import { client, urlFor } from '../../lib/client'
import Link from "next/link";
import { Footer } from '../../components';

const allBlogs = ({ productData, blogs, infoData, categories }) => {
    return (
        <>
            <Header product={productData} info={infoData} categories={categories} />
            {
                blogs?.map((post, index) => (
                    <Link href={`/blogs/${post.slug.current}`} key={index} class="flex flex-col justify-center antialiased  text-gray-800 min-h-screen gap-4">
                        <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full my-8">

                            <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                                <a class="relative block group" href="#0">
                                    <div class="absolute inset-0 bg-gray-300 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                                    <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                                        <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={urlFor(post.mainImage)} width="540" height="303" alt="Blog post" />
                                    </figure>
                                </a>
                                <div>
                                    <header>

                                        <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                                            <a class="transition duration-150 ease-in-out" href="#0">{post.title}</a>
                                        </h3>
                                    </header>
                                    <p class="text-lg text-gray-400 flex-grow">{post.metaData}</p>
                                    <footer class="flex items-center mt-4">


                                        <span class="text-gray-500">{new Date(post.publishedAt).toDateString()}</span>

                                    </footer>
                                </div>
                            </article>
                        </div>
                    </Link>
                ))
            }
            <Footer info={infoData} />
        </>
    )
}

export const getStaticProps = async () => {
    const blogs = await client.fetch(`*[_type == 'blog']`)
    const productData = await client.fetch(`*[_type=="product"]`)
    const infoData = await client.fetch(`*[_type=="info"]`)
    const categoryQuery = '*[_type == "category"]';
    const categories = await client.fetch(categoryQuery);

    return {
        props: { blogs, productData, infoData, categories }
    }
}

export default allBlogs

