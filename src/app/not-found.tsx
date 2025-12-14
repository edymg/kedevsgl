"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "@mui/icons-material";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="font-bold text-lg">Error 404</h2>
        <p className="p-4">
          Lo sentimos, pagina no existe. Regresar al menu principal de kedevs
        </p>
        <Link href="/">
          <Button>
            Regresar <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
