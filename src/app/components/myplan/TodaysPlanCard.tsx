"use client";
import IWorkout from "@/type/type";

import React, { useContext } from "react";

import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import Link from "next/link";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { toast } from "react-toastify";

const TodaysPlanCard = ({ workout }: { workout: IWorkout }) => {
  console.log("TodaysPlanCard workout:", workout);
  const { addWorkout, setAddWorkout } = useContext(WorkoutsContext);

  const handleMarkAsDone = () => {
    setAddWorkout(addWorkout.filter((w: IWorkout) => w.id !== workout.id));
    toast.success(
      `${workout.name} marked as done and removed from today's plan`,
    );
  };

  const handleRemoveWorkout = () => {
    setAddWorkout(addWorkout.filter((w: IWorkout) => w.id !== workout.id));
    toast.warning(`${workout.name} removed from today's plan`);
  };

  return (
    <div>
      <div className="bg-[#14171E] rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 lg:gap-5">
        {/* left div */}
        <div className="flex gap-3 sm:gap-4 md:gap-5 items-center min-w-0">
          <Image
            src={workout.image}
            alt={workout.name}
            height={80}
            width={144}
            className="h-16 w-24 sm:h-20 sm:w-28 md:w-36 rounded-lg object-cover shrink-0"
          />

          {/* Middle Text Div */}
          <div className="flex flex-col gap-1 min-w-0">
            <h1 className="text-white font-bold text-sm sm:text-base truncate">
              {workout.name}
            </h1>

            <p className="text-[#9ca3af] text-xs sm:text-sm truncate">
              {workout.equipment}
            </p>

            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <div className="flex items-center gap-1">
                <Clock3 size={17} strokeWidth={2} />
                <p className="text-xs sm:text-sm">{workout.duration}</p>
              </div>

              <div className="flex items-center gap-1">
                <Flame size={17} fill="currentColor" />
                <p className="text-xs sm:text-sm">{workout.caloriesBurned}</p>
              </div>

              <div className="flex items-center gap-1">
                <Star size={17} />
                <p className="text-xs sm:text-sm">{workout.rating}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Div */}
        <div className="flex gap-2 sm:gap-3 md:gap-5 items-center justify-end flex-wrap lg:flex-nowrap">
          <Link href={`/workout/${workout.id}`} className="w-full sm:w-auto">
            <button className="btn btn-outline rounded-3xl bg-[#232732] px-4 sm:px-5 py-2 font-light text-white w-full sm:w-auto text-xs sm:text-sm">
              View Details
            </button>
          </Link>

          <button
            className="btn bg-[#CCFF00] text-black rounded-3xl py-5 px-4 sm:px-5 text-xs sm:text-sm whitespace-nowrap"
            onClick={handleMarkAsDone}
          >
            Mark as Done
          </button>

          <button
            className="text-[#6B7280] text-xl sm:text-2xl shrink-0"
            onClick={handleRemoveWorkout}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodaysPlanCard;
