"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import IWorkout from "@/type/type";

interface IWorkoutsContext {
  addWorkout: IWorkout[];
  setAddWorkout: Dispatch<SetStateAction<IWorkout[]>>;
  saveWorkout: IWorkout[];
  setSaveWorkout: Dispatch<SetStateAction<IWorkout[]>>;
}

export const WorkoutsContext = createContext<IWorkoutsContext>(
  {} as IWorkoutsContext,
);

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [addWorkout, setAddWorkout] = useState<IWorkout[]>([]);
  const [saveWorkout, setSaveWorkout] = useState<IWorkout[]>([]);

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
