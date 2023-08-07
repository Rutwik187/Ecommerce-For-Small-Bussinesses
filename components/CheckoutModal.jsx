import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";

import { runFireworks } from "../lib/utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "16px",
};

export default function CheckoutModal({ coupon, subTotal, info }) {
  useEffect(() => {
    runFireworks();
  }, []);
  const mobileNumber = info[0].whatsAppNo;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const cart = useSelector((state) => state.cart.cart);
  const name = useRef();
  const phoneNo = useRef();
  const address = useRef();

  const handleSendWhatsApp = () => {
    const message = encodeURIComponent(
      "📦 New order 📦\n\n" +
        cart
          .map(
            (product) =>
              `${product.name}: ${product.count} X ₹${
                product.discountedPrice
              } = ₹${product.count * product.discountedPrice}`
          )
          .join("\n") +
        `\n\n Coupon Code: ${coupon} \n\n Subtotal: ${subTotal}\n` +
        `\n 🏡 Address: ${address.current.value}\n ☎️  Phone No.: ${phoneNo.current.value} \n 🙎 Name: ${name.current.value}`
    );
    const whatsappURL = `https://wa.me/${mobileNumber}?text=${message}`;

    window.open(
      whatsappURL,
      "_blank" // <- This is what makes it open in a new window.
    );
    window.location.href = "/success";
  };

  return (
    <div>
      {console.log(info[0].whatsAppNo)}
      <button
        onClick={handleOpen}
        className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
      >
        Checkout
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bg-gray-100 rounded-xl px-8">
            <div className="container mx-auto py-8">
              <h1 className="text-2xl font-bold mb-6 text-center">
                Checkout Form
              </h1>
              <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Rajesh Verma"
                    ref={name}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder={mobileNumber}
                    ref={phoneNo}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Address
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                    id="address"
                    name="address"
                    placeholder="address"
                    ref={address}
                    required
                  />
                </div>
                <div className="mb-4">
                  <i
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="confirm-password"
                  >
                    Also share whatsApp location for convenience if possible
                  </i>
                </div>

                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  type="button"
                >
                  Place order on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
