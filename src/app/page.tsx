import HeroBanner from "./components/banner/HeroBanner";
import Workouts from "./components/homepage/Workouts";
import Navbar from "./components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Workouts />
    </div>
  );
}
