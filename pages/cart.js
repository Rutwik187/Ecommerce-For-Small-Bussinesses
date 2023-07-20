import React, { useMemo, useState } from "react";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";



const Cart = () => {
    const [loading, setLoading] = useState(false);

    const cart = useSelector((state) => state.cart.cart);

    const discount = 20;

    const totalPrice = cart.reduce((total, item) => {
        const totalAmount = total + item.count * item.discountedPrice;
        return totalAmount - (totalAmount * (discount / 100))
    }, 0)
    // const discountedTotal = (totalPrice) => {
    //     total
    //     return 
    // }

    const handlePayment = async () => {
        try {
            setLoading(true);
            const stripe = await stripePromise;
            const res = await makePaymentRequest("/api/orders", {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.stripeSession.id,
            });
        } catch (error) {
            setLoading(false);
        }
    };

    return (
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
                                        your order, including duties and taxes,
                                        before any applicable discounts. It does
                                        not include delivery costs and
                                        international transaction fees.
                                    </div>
                                </div>

                                <div class="p-4">
                                    <p class="text-sm md:text-md py-5 border-t ">If you have a coupon code, please enter it in the box below</p>
                                    <div class="justify-center md:flex">
                                        <form action="" method="POST">
                                            <div class="flex items-center w-full h-13 pl-3  bg-gray-100 border rounded-full">
                                                <input type="coupon" name="code" id="coupon" placeholder="Apply coupon"
                                                    class="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none" />
                                                <button type="submit" class="text-sm flex items-center px-3 py-3  text-white bg-black rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none">
                                                    <svg aria-hidden="true" data-prefix="fas" data-icon="gift" class="w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z" /></svg>
                                                    <span class="font-medium">Apply</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* BUTTON START */}
                                <button
                                    className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                                    onClick={handlePayment}
                                >
                                    Checkout
                                    {loading && <img src="/spinner.svg" />}
                                </button>
                                {/* BUTTON END */}

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
    );
};

export default Cart;