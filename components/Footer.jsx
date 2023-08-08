import React, { useState, useEffect } from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const Footer = ({ info }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year whenever the component mounts
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <div className="bg-stone-100 mt-10 md:16">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-stone-100">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-1">
            <Link
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center w-10 h-10"
            >
              <img
                src={info[0] ? urlFor(info[0].logo).url() : ""}
                alt="logo"
                className="w-24 md:w-40"
              />
            </Link>
            {/* <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div> */}
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Quick Links
            </p>
            <div className="flex">
              <li className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-green-600">
                <Link href="/">Home</Link>
              </li>
            </div>
            <div className="flex">
              <li className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-green-600">
                <Link href="/about">About</Link>
              </li>
            </div>
            <div className="flex">
              <li className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-green-600">
                <Link href="/blogs/allBlogs">Blogs</Link>
              </li>
            </div>
            <div className="flex">
              <li className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-green-600 cursor-pointer">
                <Link href="/contact">Contact Us</Link>
              </li>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                target="_blank"
                href={`tel:${info[0]?.phoneNo}`}
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-green-600"
              >
                {info[0]?.phoneNo}
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                target="_blank"
                href={`mailto:${info[0]?.email}`}
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-green-600"
              >
                {info[0]?.email}
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href={info[0]?.addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-green-600 cursor-pointer"
              >
                {info[0]?.address}
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                target="_blank"
                href={info[0]?.instagram}
                className="text-gray-500 transition-colors duration-300 hover:text-green-600 cursor-pointer"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                target="_blank"
                href={info[0]?.facebook}
                className="text-gray-500 transition-colors duration-300 hover:text-green-600 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <a
            href="https://www.priyamit.co.in/home"
            target="_blank"
            className="text-sm text-green-600"
          >
            © Copyright {currentYear} Priyam IT Services Private Limited. All
            rights reserved.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
