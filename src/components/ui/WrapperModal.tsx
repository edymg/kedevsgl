"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Close } from "@mui/icons-material";

const style = {
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  position: "relative",
};

interface WrapperModalProps {
  open: boolean;
  onOpen: (open: boolean) => void;
  children: React.ReactNode;
}

/**
 * WrapperModal component to display content in a modal dialog.
 * @param {boolean} open - Boolean to control the visibility of the modal.
 * @param {function} onOpen - Function to toggle the modal's open state.
 * @param {React.ReactNode} children - The content to be displayed inside the modal.
 * @return {JSX.Element} The WrapperModal component.
 */

export default function WrapperModal({
  open,
  onOpen,
  children,
}: WrapperModalProps) {
  return (
    <div className="absolute">
      <Modal
        open={open}
        onClose={() => onOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0,0,0,0.4)",
              filter: "blur(1px)",
            },
          },
        }}
      >
        <Box
          sx={style}
          style={{
            border: "2px solid #10B981",
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div className="relative h-[750px] max-h-screen overflow-y-auto scrollbar-custom sm:w-[500px] bg-white rounded-lg py-4 sm:py-1">
            <div
              onClick={() => onOpen(false)}
              className="absolute top-4 right-3 text-gray-500 cursor-pointer"
            >
              <Close />
            </div>
            {children}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
