import React, { useState } from "react";
import { RiCoupon4Line } from "react-icons/ri";

const Coupon = ({ coupons, applyCoupon }) => {
  const [enteredCoupon, setEnteredCoupon] = useState("");

  const handleCouponChange = (e) => {
    setEnteredCoupon(e.target.value);
  };

  const handleApplyCoupon = () => {
    applyCoupon(enteredCoupon);
    setEnteredCoupon("");
  };

  return (
    <div>
      <p className="text-sm md:text-md py-5">
        If you have a coupon code, please enter it in the box below
      </p>
      <div className="justify-start md:flex">
        <div className="flex items-center w-full h-13 pl-3 bg-gray-100 border rounded-full">
          <input
            type="coupon"
            name="code"
            id="coupon"
            placeholder="Apply coupon"
            value={enteredCoupon}
            onChange={handleCouponChange}
            className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"
          />
          <button
            onClick={handleApplyCoupon}
            type="button"
            className="text-sm flex items-center px-3 py-3 text-white bg-black rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none"
          >
            <RiCoupon4Line />
            <span className="font-medium ml-2">Apply</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
