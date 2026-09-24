"use client";
import React, { createContext, ReactNode, useState } from "react";
export const WorkoutsContext = createContext({});
const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [addWorkout, setAddWorkout] = useState([]);
  const [saveWorkout, setSaveWorkout] = useState([]);
  const sharedData = {
    addWorkout,
    setAddWorkout,
    saveWorkout,
    setSaveWorkout,
  };

  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
