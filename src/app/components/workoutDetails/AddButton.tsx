"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import IWorkout from "@/type/type";
import { Calendar } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const AddButton = ({ workout }: { workout: IWorkout }) => {
  const { addWorkout, setAddWorkout } = useContext(WorkoutsContext);
  const handleAddWorkout = () => {
    console.log("Workout added to today's plan");
    if (addWorkout.some((w) => w.id === workout.id)) {
      console.log("Workout already exists in today's plan");
      return;
    } else {
      setAddWorkout([...addWorkout, workout]);
    }
    toast.success(`${workout.name} added to today's plan`);
  };
  const alreadyAdded = addWorkout.some((w) => w.id === workout.id);
  return (
    <button
      disabled={alreadyAdded}
      className={`flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-bold transition-colors ${
        alreadyAdded
          ? "cursor-not-allowed bg-[#CCFF00] text-black"
          : "border-[#272a30]  bg-[#CCFF00] text-black hover:bg-white"
      }`}
      onClick={handleAddWorkout}
    >
      <Calendar size={18} strokeWidth={2.5} />

      {alreadyAdded ? "Added" : "Add to today's plan"}
    </button>
  );
};

export default AddButton;
