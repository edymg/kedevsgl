"use client";

import LogoHorizontal from "@/app/components/common/LogoHorizontal";
import ButtonContactModal from "./ButtonContactModal";
import Link from "next/link";
import { useActiveNavbarStore } from "@/store/activeNavbar";

const Navbar = () => {
  const { isActiveGallery } = useActiveNavbarStore();

  return (
    <nav
      className="sticky sm:fixed top-0 left-0 w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-4 shadow-md z-50
    bg-white"
    >
      <LogoHorizontal />

      <div className="flex space-x-8 justify-center items-center">
        <Link
          href="#gallery"
          className={`${isActiveGallery && "text-[#10B981]"}
           mt-4 sm:mt-0 hover:text-[#10B981] transition-colors duration-150`}
        >
          <h2>Galeria</h2>
        </Link>
        <ButtonContactModal title="Contactanos" />
      </div>
    </nav>
  );
};

export default Navbar;
