"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ModalMUI from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #10B981",
  boxShadow: 24,
};

interface ModalProps {
  open: boolean;
  onOpen: (open: boolean) => void;
  children: React.ReactNode;
  width?: string;
}

// jsdoc
/**
 * Modal component to display content in a modal dialog.
 * @param {boolean} open - Boolean to control the visibility of the modal.
 * @param {function} onOpen - Function to toggle the modal's open state.
 * @param {React.ReactNode} children - The content to be displayed inside the modal.
 * @param {number} [width] - Optional width of the modal in viewport width units.
 * @param {number} [height] - Optional height of the modal in viewport height units.
 * @return {JSX.Element} The Modal component.
 */

export default function Modal({ open, onOpen, children, width }: ModalProps) {
  return (
    <div className="absolute">
      <ModalMUI
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
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            width: `${width ?? ""}`,
            margin: "0",
            padding: "0",
          }}
        >
          <div className="scrollbar-custom">{children}</div>
        </Box>
      </ModalMUI>
    </div>
  );
}
