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
import CheckoutModal from "../components/CheckoutModal";
import { Footer } from "../components";
import Accordion from "../components/CouponAccordion";

const Cart = ({ coupons, productData, infoData, categories }) => {
    const [couponValid, setCouponValid] = useState(false);
    const [percentDiscount, setPercentDiscount] = useState(0);
    const [priceGreaterThen, setPriceGreaterThen] = useState(0);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);
    const [coupon, setCoupon] = useState('');
    const [couponDiscount, setCouponDiscount] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const cart = useSelector((state) => state.cart.cart);

    const successToast = () => {
        toast.success(`Congratulations! Coupon applied`, {
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

    const couponExistsToast = () => {
        toast.error(`Coupon already exists`, {
            position: "bottom-right",
        });
    };

    useEffect(() => {
        // Calculate the initial total, coupon discount, and final price
        const initialTotal = cart.reduce((total, item) => {
            return total + item.count * item.discountedPrice;
        }, 0);

        setTotalPrice(initialTotal);
        setFinalPrice(initialTotal);
    }, [cart]);

    const handleValidCoupon = () => {
        const enteredCoupon = inputRef.current.value.toLowerCase();
        const matchingCoupon = coupons.find(couponObj => couponObj.coupon.toLowerCase() === enteredCoupon);

        if (!matchingCoupon) {
            // If the entered coupon doesn't exist, show an error toast
            failureToast();
            setCouponValid(false);
            setPercentDiscount(0);
            setPriceGreaterThen(0);
        } else {
            const couponTotal = parseFloat(matchingCoupon.totalGreaterThen);
            if (finalPrice >= couponTotal) {
                // Calculate the discount based on the percentage
                const discount = (parseFloat(matchingCoupon.percentageDiscount) / 100) * finalPrice;

                // Apply the coupon discount
                setCouponValid(true);
                setCoupon(matchingCoupon.coupon);
                setPercentDiscount(parseFloat(matchingCoupon.percentageDiscount));
                setPriceGreaterThen(couponTotal);

                // Update couponDiscount, finalPrice, and totalPrice with the discount
                const newCouponDiscount = Math.floor(discount);
                const newFinalPrice = Math.floor(finalPrice - discount);
                const newTotalPrice = Math.floor(totalPrice - newCouponDiscount);

                setCouponDiscount(newCouponDiscount);
                setFinalPrice(newFinalPrice);
                setTotalPrice(newTotalPrice);

                successToast();
            } else {
                // Cart total doesn't meet the minimum requirement, show an error toast
                addItemsToast();
                setCouponValid(false);
                setPercentDiscount(0);
                setPriceGreaterThen(0);
            }
        }
    };
    { console.log(infoData) }
    return (
        <div>
            <Header product={productData} info={infoData} categories={categories} />
            <div className="w-full md:py-20">
                <Wrapper>
                    {cart.length > 0 ? (
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
                                        <div>
                                            <div className="flex justify-between">
                                                <div className="uppercase text-md md:text-lg font-medium text-black">
                                                    Total
                                                </div>
                                                <div className="text-md md:text-lg font-medium text-black">
                                                    &#8377;{totalPrice}
                                                </div>
                                            </div>
                                            <br />

                                            <div className="flex justify-between">
                                                <div className="uppercase text-md md:text-lg font-medium text-black">
                                                    Coupon Discount
                                                </div>
                                                <div className="text-md md:text-lg font-medium text-green-500">
                                                    &#8377;{couponDiscount}
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="flex justify-between border-t">
                                            <div className="uppercase text-md md:text-lg text-black mt-3 font-extrabold">
                                                Final Price
                                            </div>
                                            <div className="mt-3 text-md md:text-lg font-extrabold text-black-900">
                                                &#8377;{finalPrice}
                                            </div>
                                        </div>
                                        <br />
                                        <div className="flex justify-between border-t">
                                            <div className="mt-3 text-md md:text-lg font-italic text-black-300">
                                                *Get free delivery on order above <b>&#8377;{infoData[0].freeDelivery}</b>
                                            </div>
                                        </div>
                                        <div className="flex justify-between border-t">
                                            <div className="mt-3 text-md md:text-lg font-italic text-black-300">
                                                *Delivery Charges per order: <b>&#8377;{infoData[0].deliveryCharges}</b>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 border-t">
                                        <p className="text-sm md:text-md py-5">
                                            If you have a coupon code, please enter it in the box below
                                        </p>
                                        <div className="justify-start md:flex">
                                            <form action="">
                                                <div className="flex items-center w-full h-13 pl-3 bg-gray-100 border rounded-full">
                                                    <input
                                                        ref={inputRef}
                                                        type="coupon"
                                                        name="code"
                                                        id="coupon"
                                                        placeholder="Apply coupon"
                                                        className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"
                                                    />
                                                    <button
                                                        onClick={handleValidCoupon}
                                                        type="button"
                                                        className="text-sm flex items-center px-3 py-3 text-white bg-black rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none"
                                                    >
                                                        <RiCoupon4Line />
                                                        <span className="font-medium ml-2">Apply</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <Accordion coupons={coupons} />
                                    </div>

                                    {/* Checkout form */}
                                    <CheckoutModal
                                        info={infoData}
                                        coupon={coupon}
                                        couponDiscount={couponDiscount}
                                        subTotal={finalPrice}
                                    />
                                </div>
                                {/* SUMMARY END */}
                            </div>
                            {/* CART CONTENT END */}
                        </>
                    ) : (
                        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                            <img
                                src="https://www.selectgp.com/content/images/empty-cart.png"
                                width={300}
                                height={300}
                                className="w-[300px] md:w-[400px]"
                                alt="Empty Cart"
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
                                <Link href="/">
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

export const getServerSideProps = async () => {
    const coupons = await client.fetch(`*[_type == 'coupon']`);
    const productData = await client.fetch(`*[_type=="product"]`);
    const infoData = await client.fetch(`*[_type=="info"]`);
    const categoryQuery = '*[_type == "category"]';
    const categories = await client.fetch(categoryQuery);

    return {
        props: {
            coupons,
            infoData,
            productData,
            categories,
        },
    };
};
