import React, { useState } from "react";

const Coupon = ({ percentageDiscount, totalGreaterThen, coupon }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = coupon;
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand("copy");

    // Clean up
    document.body.removeChild(textarea);

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 10000); // Reset copied status after 1.5 seconds
  };
  return (
    <div className="py-2 border-b border-gray-300">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{`Discount: ${percentageDiscount}%`}</span>
          <span className="text-gray-600">{`Applicable above: ₹${totalGreaterThen}`}</span>
        </div>
        <button
          className={`px-3 border-rounded py-2 rounded focus:outline-none ${
            isCopied
              ? "bg-green-500 text-white"
              : "bg-black text-white hover:bg-gray-800"
          }`}
          onClick={handleCopyClick}
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="mt-2 text-gray-600">{`Coupon Code: ${coupon}`}</div>
    </div>
  );
};

const Accordion = ({ coupons }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-md mt-8">
      <div className="border rounded-lg overflow-hidden shadow">
        <div
          className="flex items-center justify-between cursor-pointer p-4 bg-black text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-lg font-semibold">Available Coupons</h2>
          <svg
            className={`h-6 w-6 transform ₹{
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
            />
          </svg>
        </div>
        {isOpen && (
          <div className="p-4 bg-white">
            {coupons.map((coupon, index) => (
              <Coupon key={index} {...coupon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
