import React from "react";
import FooterLogo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0C0D10] py-5">
      <section className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={FooterLogo} alt="Footer Logo" width={50} height={50} />
          <h2 className="text-xl font-bold">Fit Log</h2>
        </div>
        <div className="flex gap-4">
          <h2 className="text-sm text-[#9CA3AF]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </h2>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
