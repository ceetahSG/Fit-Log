import IWorkout from "@/type/type";

import React, { useContext } from "react";

import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import Link from "next/link";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { toast } from "react-toastify";

const SavedCard = ({ workout }: { workout: IWorkout }) => {
  const { saveWorkout, setSaveWorkout } = useContext(WorkoutsContext);
  const handleRemoveWorkout = () => {
    setSaveWorkout(saveWorkout.filter((w: IWorkout) => w.id !== workout.id));
    toast.error(`${workout.name} removed from saved workouts`);
  };
  return (
    <div>
      <div>
        <div className=" bg-[#14171E] rounded-2xl p-5 flex justify-between items-center gap-5">
          {/* left div */}
          <div className="flex gap-5 items-center">
            <Image
              src={workout.image}
              alt={workout.name}
              height={80}
              width={144}
              className="h-20 w-36 rounded-lg object-cover"
            />
            {/* Middle Text Div */}
            <div className="flex flex-col gap-1">
              <h1 className="text-white font-bold">{workout.name}</h1>
              <p className="text-[#9ca3af]">{workout.equipment}</p>
              <div className="flex gap-4">
                <div className="flex items-center gap-1">
                  <Clock3 size={19} strokeWidth={2} />
                  <p>{workout.duration}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Flame size={19} fill="currentColor" />
                  <p>{workout.caloriesBurned}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={19} />
                  <p>{workout.rating}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Div */}
          <div className="flex gap-5 items-center">
            <Link href={`/workout/${workout.id}`}>
              <button className="btn btn-outline rounded-3xl bg-[#232732] px-5 py-2 font-light text-white">
                View Details
              </button>
            </Link>

            <button
              className="text-[#6B7280] text-2xl"
              onClick={handleRemoveWorkout}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
