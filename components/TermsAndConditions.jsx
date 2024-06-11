import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "./RichTextComponent";
import { AiOutlineCloseCircle } from "react-icons/ai";

const TermsAndConditions = ({ info }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div>
        <button onClick={handleOpen} className="text-sm text-green-600">
          Terms and Conditions
        </button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ overflow: "auto" }}
        >
          {/* <ModalClose variant="plain" sx={{ m: 1 }} /> */}
          <Box
            className="absolute top-20 left-1/2 transform -translate-x-1/2  w-[400px] rounded-2xl sm:w-[600px] scrollbar-hide "
            sx={{ overflow: "scroll" }}
          >
            <div className="bg-gray-100 rounded-xl px-8">
              <AiOutlineCloseCircle
                className="w-20 h-20 absolute right-0 p-4 cursor-pointer"
                onClick={handleClose}
              />
              <div className="container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-6 text-center">
                  Terms and Conditions
                </h1>
                <div className="prose max-w-none pt-8">
                  {/* <PortableText
                    value={info[0] ? info[0].termsAndConditions : []}
                    components={RichTextComponent}
                  /> */}
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default TermsAndConditions;
