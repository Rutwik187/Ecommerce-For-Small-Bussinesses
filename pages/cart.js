import React, { useMemo, useState, useRef, useEffect } from "react";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { client } from "../lib/client";
import { RiCoupon4Line } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import BasicModal from "../components/CheckoutModal";
import CheckoutModal from "../components/CheckoutModal";
import { Footer } from "../components";
import { runFireworks } from '../lib/utils';
import Accordion from "../components/CouponAccordion";

const Cart = ({ coupons, productData, infoData }) => {



    const [couponValid, setCouponValid] = useState(false)
    const [percentDiscount, setPercentDiscount] = useState(0)
    const [priceGreaterThen, setPriceGreaterThen] = useState(0)
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null)
    const [coupon, setCoupon] = useState('')
    // const [totalPrice, setTotalPrice] = useState(0)


    const cart = useSelector((state) => state.cart.cart);


    const successToast = () => {

        toast.success(`Congratulation coupon applied `, {
            position: "bottom-right",

        });
    };
    const failureToast = () => {
        toast.error(`Invalid coupon`, {
            position: "bottom-right",
        });
    };
    const addItemsToast = () => {
        toast.error(`Add more items to the cart`, {
            position: "bottom-right",
        });
    };
    const couponExitsToast = () => {
        toast.error(`Coupon already exists`, {
            position: "bottom-right",
        });
    };

    const totalPrice = cart.reduce((total, item) => {
        const totalAmount = total + item.count * item.discountedPrice;
        return Math.floor(totalAmount - (totalAmount * (percentDiscount / 100)))
    }, 0)

    const handleValidCoupon = () => {
        const enteredCoupon = inputRef.current.value
        for (const couponObj of coupons) {
            if (couponObj.coupon.toLowerCase() === enteredCoupon.toLowerCase()) {
                if (couponObj.totalGreaterThen <= totalPrice) {
                    if (couponValid == true) {
                        couponExitsToast()
                        setPercentDiscount(couponObj.percentageDiscount)
                        continue
                    }
                    else {
                        runFireworks();
                        successToast()
                        setCouponValid(true)
                        setCoupon(couponObj.coupon)
                        setPercentDiscount(couponObj.percentageDiscount)
                        setPriceGreaterThen(couponObj.totalGreaterThen)
                    }

                }
                else {
                    addItemsToast()
                    // setCouponValid(false)
                    setPercentDiscount(0)
                }
            }
            else {

                // setCouponValid(false)
                setPercentDiscount(0)

            }
        }
        // if (couponValid == true) {
        //     runFireworks();
        //     successToast()
        // }

    }




    return (
        <div>
            <Header product={productData} info={infoData} />
            <div className="w-full md:py-20">

                <Wrapper>
                    {cart.length > 0 && (
                        <>
                            {/* HEADING AND PARAGRAPH START */}
                            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                    Shopping Cart
                                </div>
                            </div>
                            {/* HEADING AND PARAGRAPH END */}

                            {/* CART CONTENT START */}
                            <div className="flex flex-col lg:flex-row gap-12 py-10">
                                {/* CART ITEMS START */}
                                <div className="flex-[2]">
                                    <div className="text-lg font-bold">
                                        Cart Items
                                    </div>
                                    {cart.map((item, index) => (
                                        <CartItem key={index} data={item} />
                                    ))}
                                </div>
                                {/* CART ITEMS END */}

                                {/* SUMMARY START */}
                                <div className="flex-[1]">
                                    <div className="text-lg font-bold">Summary</div>

                                    <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                        <div className="flex justify-between">
                                            <div className="uppercase text-md md:text-lg font-medium text-black">
                                                Subtotal
                                            </div>
                                            <div className="text-md md:text-lg font-medium text-black">
                                                &#8377;{totalPrice}
                                            </div>
                                        </div>
                                        <div className="text-sm md:text-md py-5 border-t mt-5">
                                            The subtotal reflects the total price of
                                            your order, including any applicable discounts, duties and taxes.
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <p className="text-sm md:text-md py-5 border-t ">If you have a coupon code, please enter it in the box below</p>
                                        <div className="justify-start md:flex">
                                            <form action="" >
                                                <div className="flex items-center w-full h-13 pl-3  bg-gray-100 border rounded-full">

                                                    <input ref={inputRef} type="coupon" name="code" id="coupon" placeholder="Apply coupon"
                                                        className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none" />

                                                    <button onClick={handleValidCoupon} type="button" className="text-sm flex items-center px-3 py-3  text-white bg-black rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none">
                                                        <RiCoupon4Line />
                                                        <span className="font-medium ml-2">Apply</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <Accordion coupons={coupons} />
                                    </div>



                                    {/* Checkout form */}
                                    <CheckoutModal info={infoData} coupon={coupon} subTotal={totalPrice} />


                                </div>
                                {/* SUMMARY END */}
                            </div>
                            {/* CART CONTENT END */}
                        </>
                    )}

                    {/* This is empty screen */}
                    {cart.length < 1 && (
                        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                            <img
                                src="https://www.selectgp.com/content/images/empty-cart.png"
                                width={300}
                                height={300}
                                className="w-[300px] md:w-[400px]"
                            />
                            <span className="text-xl font-bold">
                                Your cart is empty
                            </span>
                            <span className="text-center mt-4">
                                Looks like you have not added anything in your cart.
                                <br />
                                Go ahead and explore top categories.
                            </span>
                            <div className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
                                <Link
                                    href="/"

                                >

                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    )}
                </Wrapper>
            </div>
            <Footer info={infoData} />
        </div>
    );
};

export default Cart;


export const getStaticProps = async () => {
    const coupons = await client.fetch(`*[_type == 'coupon']`)
    const productData = await client.fetch(`*[_type=="product"]`)
    const infoData = await client.fetch(`*[_type=="info"]`)

    return {
        props: {
            coupons, infoData, productData
        }
    }
}