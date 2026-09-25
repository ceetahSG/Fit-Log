"use client";

import React, { useContext, useState } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const pathname = usePathname();
  const { addWorkout, saveWorkout } = useContext(WorkoutsContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0C0D10] py-4 sm:py-5">
      <section className="container mx-auto flex items-center justify-between gap-2 px-3 sm:px-5 lg:px-0">
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            className="h-9 w-9 sm:h-10 sm:w-10"
          />

          <h2 className="text-base font-bold sm:text-xl">Fit Log</h2>
        </div>
        {/* Navigation */}

        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2 lg:gap-4">
          {/* Hamburger - mobile only */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "" : <RxHamburgerMenu size={24} />}
          </button>

          {/* Navigation links */}
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center gap-1 sm:gap-2 lg:gap-4`}
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <button
                className={`rounded-2xl px-3 py-1.5 text-[10px]  text-xs font-bold sm:px-5 sm:py-2 sm:text-sm ${
                  pathname === "/" ? "bg-[#C2F800] text-black" : "text-white"
                }`}
              >
                Workouts
              </button>
            </Link>

            <Link href="/myPlan" onClick={() => setMenuOpen(false)}>
              <button
                className={`rounded-2xl px-3 py-1.5 text-[10px] font-bold  sm:px-5 sm:py-2 sm:text-sm ${
                  pathname === "/myPlan"
                    ? "bg-[#C2F800] text-black"
                    : "text-white"
                }`}
              >
                My Plan
              </button>
            </Link>
          </div>
        </div>

        {/* Plan / Saved */}
        <div className="flex shrink-0 items-center gap-1.5 text-xs sm:gap-3 sm:text-sm">
          <h1>Plan</h1>

          <h1 className="rounded-full border-2 border-[#2D313B] bg-[#C2F800] px-1.5 py-0.5 font-bold text-black sm:px-2">
            {addWorkout.length}
          </h1>

          <h1>Saved</h1>

          <h1 className="rounded-full border-2 border-[#2D313B] bg-[#0C0D10] px-1.5 py-0.5 font-bold text-[#D1D5DB] sm:px-2">
            {saveWorkout.length}
          </h1>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
