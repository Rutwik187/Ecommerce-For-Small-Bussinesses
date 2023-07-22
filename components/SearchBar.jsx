import Link from "next/link";
import React, { useState } from "react";

const SearchBar = ({ product }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredResults = product.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    if (query.length > 1) {
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="relative mx-auto text-gray-600">
      <input
        // onChange={(e) => {
        //   setSearchWord(e.target.value);
        // }}

        value={searchQuery}
        onChange={handleSearch}
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-48 md:w-60"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-3 mr-4 cursor-pointer"
      >
        <svg
          className="text-gray-900 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          //   xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style={{ enableBackground: "new 0 0 56.966 56.966" }}
          //   xml:space="preserve"
          width="512px"
          height="512px"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
      <div>
        <ul className="mt-2 absolute bg-white border-2 border-gray-300 rounded-lg text-sm  ">
          {searchResults.length > 0 ? (
            searchResults?.map((result, index) => (
              <Link href={`/product/${result.slug.current}`}>
                <li
                  key={index}
                  className="cursor-pointer px-4 py-2 border-b last:border-b-0 hover:bg-gray-100 text-black"
                >
                  {result.name}
                </li>
              </Link>
            ))
          ) : searchQuery.length > 1 ? (
            <li className="cursor-pointer px-4 py-2 border-b last:border-b-0 hover:bg-gray-100 text-black w-full">
              No results found
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
