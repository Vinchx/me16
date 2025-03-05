import Lanyard from "@/components/Lanyard/Lanyard";
import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity";
import Particles from "@/components/Particles/Particles";
import AnimatedText from "@/components/AnimatedText/AnimatedText";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen max-w-full contain-content ">
        {/* Particles as Background */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Scroll Velocity */}
        <div className="absolute z-10 top-[340px] w-full">
          <ScrollVelocity />
        </div>

        {/* Lanyard */}
        <div className="absolute inset-0 z-20">
          <Lanyard />
        </div>
      </div>

      {/* Content Section (Halaman Kedua) */}
      <div className="relative flex flex-col items-center min-h-screen w-full">
        <AnimatedText />
      </div>

      {/* Halaman Ketiga */}
      <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 text-white">
        <h1 className="text-5xl font-bold">Halaman Ketiga</h1>
        <p className="text-lg mt-4 max-w-2xl text-center">
          Ini adalah halaman ketiga. Kamu bisa menambahkan konten lainnya di
          sini!
        </p>
      </div>
      {/* Halaman 4 */}
      <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 text-white">
        <h1 className="text-5xl font-bold">Halaman 4</h1>
        <p className="text-lg mt-4 max-w-2xl text-center">
          Ini adalah halaman 4. Kamu bisa menambahkan konten lainnya di
          sini!
        </p>
      </div>
    </div>
  );
}
