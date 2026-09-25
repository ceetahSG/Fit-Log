import WorkoutCard from "../shared/WorkoutCard";
import IWorkout from "@/type/type";
const getWorkouts = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "force-cache",
  });
  const data = await response.json();
  return data;
};

const Workouts = async () => {
  const workouts = await getWorkouts();
  return (
    <section id="product" className=" container mx-auto my-20">
      <div className="mb-10 flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white">THE LIBRARY</h1>
        <p className="text-[#9ca3af]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {workouts.map((workout: IWorkout) => {
          return <WorkoutCard key={workout.id} workout={workout} />;
        })}
      </div>
    </section>
  );
};

export default Workouts;
