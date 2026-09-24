import React from "react";
import Banner from "@/assets/banner.png";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div>
      <div className="hero-content flex flex-row-reverse justify-between gap-20 mx-auto container py-25 px-20 rounded-4xl bg-[#222630] my-10">
        <Image src={Banner} alt="Banner" />
        <div className="max-w-150 flex flex-col gap-2">
          <p className="text-[#C2F800]">WORKOUT LIBRARY</p>
          <h1 className="text-5xl font-bold">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="py-6 text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.
          </p>
          <div>
            <button className="btn btn-active bg-[#C2F800] text-black rounded-l">
              Browse Workouts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
