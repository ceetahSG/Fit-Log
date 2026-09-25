"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { Oswald } from "next/font/google";
import IWorkout from "@/type/type";
import TodaysPlanCard from "../components/myplan/TodaysPlanCard";
import SavedCard from "../components/myplan/SavedCard";

const oswald = Oswald({
  subsets: ["latin"],
});

const MyPlanPage = () => {
  const { addWorkout, saveWorkout } = useContext(WorkoutsContext);
  const minutes = addWorkout.reduce(
    (total: number, workout: IWorkout) => total + workout.duration,
    0,
  );
  const calories = addWorkout.reduce(
    (total: number, workout: IWorkout) => total + workout.caloriesBurned,
    0,
  );
  console.log("addWorkout:", addWorkout.length);
  // State to manage which tab is currently selected (matching the image which has "Saved" selected)
  const [activeTab, setActiveTab] = useState("Saved");
  const [sortBy, setSortBy] = useState<"Rating" | "Duration" | "Calories">(
    "Rating",
  );
  console.log(sortBy);
  const sortWorkouts = (workout: IWorkout[]) => {
    const sortedWorkouts = [...workout];
    if (sortBy === "Rating") {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "Duration") {
      sortedWorkouts.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "Calories") {
      sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }
    return sortedWorkouts;
  };
  const sortedAddWorkout = sortWorkouts(addWorkout);
  const sortedSaveWorkout = sortWorkouts(saveWorkout);
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="container mx-auto p-4 py-10 font-sans md:p-10">
        <div className=" flex  flex-col gap-8">
          {/* Header Section */}
          <div className="flex flex-col gap-2">
            <h1
              className={`${oswald.className} text-4xl font-bold uppercase tracking-wide text-white`}
            >
              My Plan
            </h1>
            <p className="text-[#9ca3af] text-sm md:text-base">
              Cap of five lifts for today. Finish them, then load more.
            </p>
          </div>

          {/* Stats Card */}
          <div className="flex flex-col md:flex-row w-full items-start md:items-center rounded-2xl border border-[#272a30] bg-[#15171c] p-6 shadow-sm">
            <div className="grid w-full grid-cols-3 divide-x divide-[#272a30]">
              {/* Exercises Stat */}
              <div className="flex flex-col gap-1 px-4 first:pl-0">
                <span className="text-xs text-[#9ca3af] md:text-sm">
                  Exercises
                </span>
                <span
                  className={`${oswald.className} text-4xl font-bold text-[#C2F800] md:text-5xl`}
                >
                  {addWorkout.length}
                </span>
              </div>

              {/* Minutes Stat */}
              <div className="flex flex-col gap-1 px-4 md:px-8">
                <span className="text-xs text-[#9ca3af] md:text-sm">
                  Minutes
                </span>
                <span
                  className={`${oswald.className} text-4xl font-bold text-white md:text-5xl`}
                >
                  {minutes}
                </span>
              </div>

              {/* Calories Stat */}
              <div className="flex flex-col gap-1 px-4 md:px-8">
                <span className="text-xs text-[#9ca3af] md:text-sm">
                  Calories
                </span>
                <span
                  className={`${oswald.className} text-4xl font-bold text-white md:text-5xl`}
                >
                  {calories}
                </span>
              </div>
            </div>
          </div>

          {/* Controls Section (Tabs & Sort) */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2">
            {/* Tabs */}
            <div className="flex rounded-xl border border-[#272a30] bg-[#15171c] p-1">
              <button
                onClick={() => setActiveTab("Today's Plan")}
                className={`rounded-xl px-5 py-2 text-sm font-medium transition-colors ${
                  activeTab === "Today's Plan"
                    ? "bg-[#272a30] text-white"
                    : "text-[#9ca3af] hover:text-white"
                }`}
              >
                Todays Plan
              </button>
              <button
                onClick={() => setActiveTab("Saved")}
                className={`rounded-xl px-5 py-2 text-sm font-medium transition-colors ${
                  activeTab === "Saved"
                    ? "bg-[#272a30] text-white"
                    : "text-[#9ca3af] hover:text-white"
                }`}
              >
                Saved
              </button>
            </div>

            {/* Sort By Dropdown */}
            <div className="grid grid-cols-2 items-center">
              <h2 className=" text-[#9ca3af]">Sort By</h2>
              <select
                value={sortBy}
                className="select appearance-none border-none rounded-xl"
                onChange={(e) =>
                  setSortBy(
                    e.target.value as "Rating" | "Duration" | "Calories",
                  )
                }
              >
                <option disabled={true}>Sort By</option>
                <option value="Rating">Rating</option>
                <option value="Duration">Duration</option>
                <option value="Calories">Calories</option>
              </select>
            </div>
          </div>

          {/* Empty State Content Area */}
          {activeTab === "Today's Plan" && addWorkout.length === 0 && (
            <div className="mt-4 flex min-h-100 w-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-[#272a30] bg-[#0a0a0a] p-8 text-center md:p-12">
              <h2
                className={`${oswald.className} text-2xl font-bold uppercase tracking-wide text-white md:text-3xl`}
              >
                Nothing here yet
              </h2>
              <p className="text-sm text-[#9ca3af] md:text-base">
                Browse the library and add a lift to get today moving.
              </p>
              <Link href="/">
                <button className="mt-4 rounded-4xl bg-[#C2F800] px-8 py-3 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95">
                  Go to workouts
                </button>
              </Link>
            </div>
          )}
          {activeTab === "Saved" && saveWorkout.length === 0 && (
            <div className="mt-4 flex min-h-100 w-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-[#272a30] bg-[#0a0a0a] p-8 text-center md:p-12">
              <h2
                className={`${oswald.className} text-2xl font-bold uppercase tracking-wide text-white md:text-3xl`}
              >
                Nothing here yet
              </h2>
              <p className="text-sm text-[#9ca3af] md:text-base">
                Browse the library and add a lift to get today moving.
              </p>
              <Link href="/">
                <button className="mt-4 rounded-4xl bg-[#C2F800] px-8 py-3 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95">
                  Go to workouts
                </button>
              </Link>
            </div>
          )}
          {activeTab === "Today's Plan" && addWorkout.length > 0 && (
            <div className="mt-4 flex flex-col gap-4">
              {sortedAddWorkout.map((workout: IWorkout) => (
                <TodaysPlanCard key={workout.id} workout={workout} />
              ))}
            </div>
          )}
          {activeTab === "Saved" && saveWorkout.length > 0 && (
            <div className="mt-4 flex flex-col gap-4">
              {sortedSaveWorkout.map((workout: IWorkout) => (
                <SavedCard key={workout.id} workout={workout} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
