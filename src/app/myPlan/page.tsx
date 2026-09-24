"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext } from "react";

const MyPlanPage = () => {
  const { addWorkout, saveWorkout } = useContext(WorkoutsContext);
  console.log("addWorkout", addWorkout);
  console.log("saveWorkout", saveWorkout);

  return <div></div>;
};

export default MyPlanPage;
