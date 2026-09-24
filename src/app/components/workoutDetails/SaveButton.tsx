"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import IWorkout from "@/type/type";
import { Bookmark } from "lucide-react";
import React, { useContext } from "react";

const SaveButton = ({ workout }: { workout: IWorkout }) => {
  const { saveWorkout, setSaveWorkout } = useContext(WorkoutsContext);
  const handleAddWorkout = () => {
    console.log("Workout added to today's plan");
    if (saveWorkout.some((w) => w.id === workout.id)) {
      console.log("Workout already exists in today's plan");
      return;
    } else {
      setSaveWorkout([...saveWorkout, workout]);
    }
  };
  const alreadySaved = saveWorkout.some((w) => w.id === workout.id);
  return (
    <button
      disabled={alreadySaved}
      className={`flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-bold transition-colors ${
        alreadySaved
          ? "cursor-not-allowed border-gray-600 bg-gray-600 text-gray-300"
          : "border-[#272a30] bg-transparent text-white hover:bg-[#272a30]"
      }`}
      onClick={handleAddWorkout}
    >
      <Bookmark size={18} strokeWidth={2} />

      {alreadySaved ? "Saved" : "Save for later"}
    </button>
  );
};

export default SaveButton;
