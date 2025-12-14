"use client";

import { Button } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import WrapperModal from "@/components/ui/WrapperModal";
import { useState } from "react";
import Formulary from "./Formulary";
import { cn } from "@/lib/utils";

interface BtnContactProps {
  title: string;
  size?: string;
}
const ButtonContactModal = ({ title, size }: BtnContactProps) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={onOpen}
        size="large"
        variant="contained"
        endIcon={<ArrowRight className="h-8 w-8" />}
        sx={{
          background: "linear-gradient(to right, #10B981, #047857)",
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          padding: "12px 24px",
          borderRadius: "8px", // Slightly rounded corners
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "linear-gradient(to right, #0CA678, #065F46)",
            boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
            transform: "translateY(-1px)",
            "& .MuiButton-endIcon": {
              transform: "translateX(3px)",
            },
          },
          "&:active": {
            transform: "translateY(0)",
          },
        }}
      >
        <span className={cn(size ?? "15")}>{title}</span>
      </Button>

      <WrapperModal open={open} onOpen={onOpen}>
        <Formulary />
      </WrapperModal>
    </>
  );
};

export default ButtonContactModal;
