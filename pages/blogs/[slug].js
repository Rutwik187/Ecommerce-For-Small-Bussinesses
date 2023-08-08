import React from "react";
import { urlFor, client } from "../../lib/client";
import { PortableText } from "@portabletext/react";


import { RichTextComponent } from "../../components/RichTextComponent";
import Header from "../../components/Header";
import { Footer } from "../../components";




const BlogPage = ({ post, productData, infoData, categories }) => {

    return (
        <>
            <Header product={productData} info={infoData} categories={categories} />

            <div>
                <div className="container px-4 mx-auto py-6 md:py-10">
                    <div className="mx-auto max-w-4xl">
                        <div className="">
                            <h1 className="pt-5 font-body text-3xl font-semibold text-gray-900 sm:text-3xl md:text-4xl xl:text-4xl m-auto">
                                {post.title}
                            </h1>

                            <br />
                            <span className="block pt-1 font-body text-xl  text-grey-30">
                                {new Date(post.publishedAt).toDateString()}
                            </span>
                        </div>
                        <img
                            className="bg-no-repeat bg-cover  col-span-full lg:col-span-4"
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                        />
                        <div className="prose max-w-none pt-8">
                            <PortableText
                                // Pass in block content straight from Sanity.io
                                value={post.body}
                                components={RichTextComponent}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer info={infoData} />
        </>
    );
};

export default BlogPage;

export const getStaticPaths = async () => {


    const blogs = await client.fetch(`*[_type == "blogs"]`);

    const paths = blogs?.map((post) => ({
        params: {
            slug: post.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const categoryQuery = '*[_type == "category"]';
    const categories = await client.fetch(categoryQuery);
    const post = await client.fetch(`*[_type == "blog" && slug.current == '${slug}'][0]`)
    const productData = await client.fetch(`*[_type=="product"]`)
    const infoData = await client.fetch(`*[_type=="info"]`)
    return {
        props: { post, productData, infoData, categories }
    }
}
