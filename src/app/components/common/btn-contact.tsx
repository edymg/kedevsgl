import { Button } from "@/components/ui/button";
import { ArrowRight } from "@mui/icons-material";
import React from "react";

interface BtnContactProps {
  title: string;
}

export const BtnContact = ({ title }: BtnContactProps) => {
  return (
    <Button
      size="lg"
      className="group bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 font-bold uppercase"
    >
      {title}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );
};
