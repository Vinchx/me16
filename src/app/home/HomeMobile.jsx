"use client";

import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("@/components/Lanyard/Lanyard"), {
  ssr: false,
});
const ScrollVelocity = dynamic(
  () => import("@/components/ScrollVelocity/ScrollVelocity"),
  { ssr: false }
);
const ScrollVelocity2 = dynamic(
  () => import("@/components/ScrollVelocity/ScrollVelocity2"),
  { ssr: false }
);
const ScrollVelocity3 = dynamic(
  () => import("@/components/ScrollVelocity/ScrollVelocity3"),
  { ssr: false }
);
const Particles = dynamic(() => import("@/components/Particles/Particles"), {
  ssr: false,
});
const AnimatedText = dynamic(
  () => import("@/components/AnimatedText/AnimatedText"),
  { ssr: false }
);
const BlurText = dynamic(() => import("@/components/BlurText/BlurText"), {
  ssr: false,
});
const GitHubCard = dynamic(() => import("@/components/GitHubCard/GitHubCard"), {
  ssr: false,
});
const Carousel = dynamic(() => import("@/components/Carousel/Carousel"), {
  ssr: false,
});
const PixelTransition = dynamic(
  () => import("@/components/PixelTransition/PixelTransition"),
  { ssr: false }
);

const TrueFocus = dynamic(() => import("@/components/TrueFocus/TrueFocus"), {
  ssr: false,
});

import Image from "next/image";

export default function Home() {
  return (
    /* Div utama */
    <div className="relative">
      {/* Particles sebagai background */}
      <div className="absolute w-full min-h-screen -z-40 bg-[#0D1821]">
        {/* <Particles moveParticlesOnHover={true} /> */}
        <h1 className="absolute top-0 left-0 text-white text-2xl font-bold p-4">
          Particles Background
        </h1>
      </div>
    </div>
  );
}
