"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import IWorkout from "@/type/type";
import { Bookmark } from "lucide-react";
import React, { useContext } from "react";

const SaveButton = ({ workout }: { workout: IWorkout }) => {
  const { saveWorkout, setSaveWorkout } = useContext(WorkoutsContext);
  const handleAddWorkout = () => {
    console.log("Workout added to today's plan");
    setSaveWorkout([...saveWorkout, workout]);
  };
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-xl border border-[#272a30] bg-transparent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#272a30]"
      onClick={() => handleAddWorkout()}
    >
      <Bookmark size={18} strokeWidth={2} />
      Save for later
    </button>
  );
};

export default SaveButton;
