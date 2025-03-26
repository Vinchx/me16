import Lanyard from "@/components/Lanyard/Lanyard";
import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity";
import Particles from "@/components/Particles/Particles";
import AnimatedText from "@/components/AnimatedText/AnimatedText";

export default function Home() {
  return (
    /* Div utama */
    <div className="relative">
      {/* Particles sebagai background */}
      <div className="absolute w-full h-full -z-10">
        {/* <Particles moveParticlesOnHover={true} /> */}
      </div>
      {/* Halaman pertama */}
      <div className="relative z-10 min-h-screen flex items-center justify-evenly">
        {/* Animasi text dan foto */}
        <div className="flex md:flex-row items-center">
          {/* Animasi text */}
          <div className="text-[4.5em] text-center md:text-left">
            <AnimatedText />
          </div>
          {/* Foto */}
          <div className="w-[17em] p-4">
            <img src="/assets/mejir.png" alt="atmin" className="rounded-3xl" />
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}
