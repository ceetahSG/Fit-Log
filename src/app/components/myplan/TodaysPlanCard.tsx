import IWorkout from "@/type/type";

import React from "react";

import Image from "next/image";

const TodaysPlanCard = ({ workout }: { workout: IWorkout }) => {
  console.log("TodaysPlanCard workout:", workout); // Log the workout prop to check its value

  return (
    <div>
      <div>
        <Image src={workout.image} alt={workout.name} width={144} height={80} />
      </div>
    </div>
  );
};

export default TodaysPlanCard;
