import IWorkout from "@/type/type";
import React from "react";
import Image from "next/image";
import { Oswald } from "next/font/google";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

const oswald = Oswald({
  subsets: ["latin"],
});

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <Link href={`/workout/${workout.id}`}>
      <div className="overflow-hidden rounded-3xl border border-[#272a30] bg-[#15171c] shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
        {/* Image */}
        <div className="relative h-[245px] w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-7">
          {/* Categories */}
          <div className="mb-5 flex gap-2">
            {workout.muscleGroups.map((category) => (
              <span
                key={category}
                className="rounded-full bg-[#C2F800] px-4 py-1 text-sm font-bold text-black"
              >
                {category.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Workout name */}
          <h2
            className={`${oswald.className} text-2xl font-bold uppercase tracking-wide text-white`}
          >
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="mt-2 text-base text-[#9ca3af]">{workout.equipment}</p>

          {/* Divider */}
          <div className="my-5 h-px bg-[#292c32]" />

          {/* Stats */}
          <div className="flex items-center gap-5 text-[#9ca3af]">
            {/* Duration */}
            <div className="flex items-center gap-2">
              <Clock3 size={19} strokeWidth={2} />
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <Flame size={19} fill="currentColor" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Star size={19} />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
