import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 24,
  // p: 4,
  borderRadius: "16px",
};

export default function CheckoutModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div>
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
          <div class="bg-gray-100 rounded-xl px-8">
            <div class="container mx-auto py-8">
              <h1 class="text-2xl font-bold mb-6 text-center">Checkout Form</h1>
              <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Rajesh Verma"
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="9896857412"
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Address
                  </label>
                  <textarea
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                    id="address"
                    name="address"
                    placeholder="address"
                  />
                </div>
                <div class="mb-4">
                  <i
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="confirm-password"
                  >
                    Also share whatsApp location for convenience if possible
                  </i>
                </div>
                <button
                  class="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  type="submit"
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
