"use client";
import React from "react";
import Banner from "@/assets/banner.png";
import Image from "next/image";

const HeroBanner = () => {
  const handleBrowseClick = () => {
    document.getElementById("product")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="hero-content container mx-auto my-5 flex flex-col-reverse justify-between gap-8 rounded-3xl bg-[#15171D] px-5 py-10 sm:my-8 sm:gap-10 sm:px-8 sm:py-12 md:my-10 md:flex-row-reverse md:gap-10 md:rounded-4xl md:px-12 md:py-16 lg:gap-16 lg:px-20 lg:py-20">
        <Image
          src={Banner}
          alt="Banner"
          className="w-full max-w-105 object-contain md:w-1/2"
        />

        <div className="flex max-w-150 flex-col gap-2">
          <p className="text-sm text-[#C2F800] sm:text-base">WORKOUT LIBRARY</p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="py-4 text-sm leading-relaxed text-[#9CA3AF] sm:py-6 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.
          </p>

          <div>
            <button
              className="btn btn-active rounded-l bg-[#C2F800] px-5 text-sm text-black sm:px-6 sm:text-base"
              onClick={handleBrowseClick}
            >
              Browse Workouts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
