import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
const links = (
  <>
    <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-4">
      <Link href="/">
        <button className="btn btn-soft btn-success rounded-2xl px-5 text-sm font-bold">
          Workouts
        </button>
      </Link>
      <Link href="/myPlan">
        <button>My Plan</button>
      </Link>
    </div>
  </>
);

const Navbar = () => {
  return (
    <nav className="bg-[#0C0D10] py-5">
      <section className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <h2 className="text-xl font-bold">Fit Log</h2>
        </div>
        <div>{links}</div>
        <div className="flex gap-4">
          <h1>Plan</h1>
          <h1 className="bg-[#C2F800] text-black px-2  rounded-4xl font-bold border-2 border-[#2D313B]">
            0
          </h1>
          <h1>Saved</h1>
          <h1 className="bg-[#0C0D10] text-[#D1D5DB] px-2  rounded-4xl font-bold border-2 border-[##2D313B]">
            0
          </h1>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
