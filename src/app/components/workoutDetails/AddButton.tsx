"use client";
import IWorkout from "@/type/type";
import { Calendar } from "lucide-react";
import React from "react";

const AddButton = ({ workout }: { workout: IWorkout }) => {
  const handleAddWorkout = () => {
    console.log("Workout added to today's plan");
    console.log(workout);
  };
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-xl bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105"
      onClick={() => handleAddWorkout()}
    >
      <Calendar size={18} strokeWidth={2.5} />
      Add to today's plan
    </button>
  );
};

export default AddButton;
