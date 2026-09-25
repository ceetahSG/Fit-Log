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
    <Link href={`/workout/${workout.id}`} className="block">
      <div className="h-full overflow-hidden rounded-3xl border border-[#272a30] bg-[#15171c] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        {/* Image */}
        <div className="relative h-52 w-full sm:h-60 md:h-64 lg:h-61.25">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 md:p-6 lg:p-7">
          {/* Categories */}
          <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
            {workout.muscleGroups.map((category) => (
              <span
                key={category}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold text-black sm:px-4 sm:text-sm"
              >
                {category.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Workout name */}
          <h2
            className={`${oswald.className} text-xl font-bold uppercase tracking-wide text-white sm:text-2xl`}
          >
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="mt-2 text-sm text-[#9ca3af] sm:text-base">
            {workout.equipment}
          </p>

          {/* Divider */}
          <div className="my-4 h-px bg-[#292c32] sm:my-5" />

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#9ca3af] sm:gap-x-5 sm:text-base">
            {/* Duration */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Clock3 size={18} strokeWidth={2} />
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Flame size={18} fill="currentColor" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Star size={18} />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
