import React from "react";
import FooterLogo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0C0D10] py-5">
      <section className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-0">
        <div className="flex items-center gap-3 sm:gap-4">
          <Image
            src={FooterLogo}
            alt="Footer Logo"
            width={50}
            height={50}
            className="h-9 w-9 sm:h-10 sm:w-10"
          />
          <h2 className="text-lg font-bold sm:text-xl">Fit Log</h2>
        </div>

        <div className="flex gap-4 text-center md:text-right">
          <h2 className="text-xs text-[#9CA3AF] sm:text-sm">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </h2>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
