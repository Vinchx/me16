import Lanyard from "@/components/Lanyard/Lanyard";
import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity";


export default function Home() {
  return (
    <div>
      <div className="h-screen w-full">

      </div>
      <div className="flex items-center relative h-screen w-full overflow-hidden">
        <div className="absolute z-0 top-[340px]">
        <ScrollVelocity />
        </div>
        <div className="absolute w-full h-full z-1">
        <Lanyard />
        </div>
      </div>
      
    </div>
  );
}
