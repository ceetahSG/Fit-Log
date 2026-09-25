import React from "react";
import Image from "next/image";
import { Oswald } from "next/font/google";
import AddButton from "@/app/components/workoutDetails/AddButton";
import SaveButton from "@/app/components/workoutDetails/SaveButton";
import IWorkout from "@/type/type";

const oswald = Oswald({
  subsets: ["latin"],
});

interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkoutDetails = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const workoutData = await getWorkoutDetails();

  const workout = workoutData.find((w: IWorkout) => w.id === parseInt(id));

  if (!workout) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <h2
          className={`${oswald.className} text-3xl font-bold text-white uppercase`}
        >
          Workout not found
        </h2>
      </div>
    );
  }

  // Fallbacks mapping your original design to the assumed API structure
  const tags = workout.muscleGroups || workout.tags || ["Chest", "Arms"];
  const instructions = workout.instructions || [
    "Lie on the bench with eyes under the bar and feet planted.",
    "Unrack with locked elbows and lower the bar to mid-chest.",
    "Press up in a slight arc until elbows lock without bouncing.",
    "Keep shoulder blades pinched and a natural arch in the back.",
  ];

  const metrics = [
    { label: "EQUIPMENT", value: workout.equipment || "Barbell, Bench" },
    { label: "DIFFICULTY", value: workout.difficulty || "Intermediate" },
    { label: "SETS", value: workout.sets || "4" },
    { label: "REPS", value: workout.reps || "6-8" },
    { label: "DURATION", value: `${workout.duration || "25"} min` },
    {
      label: "CALORIES",
      value: `${workout.caloriesBurned || workout.calories || "180"} kcal`,
    },
    { label: "RATING", value: workout.rating || "4.8" },
  ];

  return (
    <div className="min-h-screen bg-black p-4 py-10 md:p-10">
      {/* Main Card Container */}
      <div className="mx-auto flex max-w-[1000px] flex-col gap-8 rounded-3xl border border-[#272a30] bg-[#15171c] p-6 shadow-lg md:flex-row md:gap-10 md:p-10">
        {/* Left Column (Image) */}
        <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-2xl md:h-[500px] md:w-[400px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Right Column (Content) */}
        <div className="flex flex-1 flex-col justify-center">
          {/* Header */}
          <div className="mb-6">
            <h1
              className={`${oswald.className} mb-3 text-4xl font-bold uppercase tracking-wide text-white md:text-5xl`}
            >
              {workout.name || "BARBELL BENCH PRESS"}
            </h1>
            <p className="text-base text-[#9ca3af] md:text-lg">
              {workout.description ||
                "A compound press that builds chest thickness, triceps, and pressing power from a stable bench."}
            </p>
          </div>

          {/* Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-[#C2F800] px-4 py-1 text-xs font-bold uppercase tracking-wide text-black"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics List */}
          <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-[#272a30] p-5">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center justify-between"
              >
                <span className="text-sm font-medium tracking-wide text-[#9ca3af] uppercase">
                  {metric.label}
                </span>
                <span className="text-sm font-bold text-white">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mb-8">
            <h3
              className={`${oswald.className} mb-4 text-xl font-bold uppercase tracking-wide text-white`}
            >
              Instructions
            </h3>
            <ol className="flex list-decimal flex-col gap-3 pl-5 text-[#9ca3af]">
              {instructions.map((step: string, index: number) => (
                <li
                  key={index}
                  className="text-sm leading-relaxed md:text-base pl-2"
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex flex-col gap-4 sm:flex-row">
            <AddButton workout={workout} />
            <SaveButton workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
