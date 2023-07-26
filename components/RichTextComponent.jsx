// import { Link } from "react-router-dom";
import { urlFor } from "../lib/client";
import React from "react";
import Link from "next/link";

export const RichTextComponent = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative m-10 mx-auto h-96 w-full">
          <img
            className="object-contain mx-auto my-3"
            src={urlFor(value).url()}
            alt="Blog post Image"
            fill
          />
        </div>
      );
    },
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },

  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="py-10 text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h1 className="py-10 text-4xl font-bold">{children}</h1>
    ),
    h3: ({ children }) => (
      <h1 className="py-10 text-3xl font-bold">{children}</h1>
    ),
    h4: ({ children }) => (
      <h1 className="py-10 text-2xl font-bold">{children}</h1>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-5 border-l-4 border-l-emphasize py-5 pl-5">
        {children}
      </blockquote>
    ),
  },
};
