import Lanyard from "@/components/Lanyard/Lanyard";
import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity";
import Particles from "@/components/Particles/Particles";
import AnimatedText from "@/components/AnimatedText/AnimatedText";

export default function Home() {
  return (
    /* Div utama */
    <div>
      {/* halaman pertama */}
      <div>
        {/* animasi text dan foto */}
        <div className="h-screen flex items-center justify-center space-x-16">
          {/* animasi text */}
          <div className="text-7xl border">
            <AnimatedText />
          </div>
          {/* foto */}
          <div className="w-[19.2%] border p-4">
            <img src="/assets/mejir.png" alt="atmin" className=" rounded-3xl"/>
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
}

