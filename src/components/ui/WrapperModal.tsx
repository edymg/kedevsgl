"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface WrapperModalProps {
  open: boolean;
  onOpen: (open: boolean) => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
}

// jsdoc
/**
 * WrapperModal component to display content in a modal dialog.
 * @param {boolean} open - Boolean to control the visibility of the modal.
 * @param {function} onOpen - Function to toggle the modal's open state.
 * @param {React.ReactNode} children - The content to be displayed inside the modal.
 * @param {number} [width] - Optional width of the modal in viewport width units.
 * @param {number} [height] - Optional height of the modal in viewport height units.
 * @return {JSX.Element} The WrapperModal component.
 */

export default function WrapperModal({
  open,
  onOpen,
  children,
  width,
  height,
}: WrapperModalProps) {
  return (
    <div className="absolute">
      <Modal
        open={open}
        onClose={() => onOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
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
            width: `${width ?? ""}`,
            height: `${height ?? ""}`,
            margin: "0",
            padding: "0",
          }}
        >
          {/* CLOSE ICON (FUERA DEL SCROLL) */}
          <div
            onClick={() => onOpen(false)}
            className="absolute top-2 right-3 sm:right-[-90px] text-gray-500 cursor-pointer"
          >
            <Close />
          </div>

          <div className="h-screen overflow-y-auto scrollbar-custom sm:w-[500px] bg-white">
            {children}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
