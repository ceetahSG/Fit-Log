"use client";

import React, { useContext } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WorkoutsContext } from "@/context/WorkoutsContext";

const Navbar = () => {
  const pathname = usePathname();
  const { addWorkout, saveWorkout } = useContext(WorkoutsContext);

  return (
    <nav className="bg-[#0C0D10] py-5">
      <section className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <h2 className="text-xl font-bold">Fit Log</h2>
        </div>

        <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-4">
          <Link href="/">
            <button
              className={`px-5 py-2 text-sm font-bold rounded-2xl ${
                pathname === "/" ? "bg-[#C2F800] text-black" : "text-white"
              }`}
            >
              Workouts
            </button>
          </Link>

          <Link href="/myPlan">
            <button
              className={`rounded-2xl px-5 py-2 text-sm font-bold ${
                pathname === "/myPlan"
                  ? "bg-[#C2F800] text-black"
                  : "text-white"
              }`}
            >
              My Plan
            </button>
          </Link>
        </div>

        <div className="flex gap-4">
          <h1>Plan</h1>

          <h1 className="rounded-4xl border-2 border-[#2D313B] bg-[#C2F800] px-2 font-bold text-black">
            {addWorkout.length}
          </h1>

          <h1>Saved</h1>

          <h1 className="rounded-4xl border-2 border-[#2D313B] bg-[#0C0D10] px-2 font-bold text-[#D1D5DB]">
            {saveWorkout.length}
          </h1>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
