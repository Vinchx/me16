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
      </div>

      {/* scroll velocity */}
      <div className="absolute left-[8rem] pb-3 bg-[#B4CDED] text-[#0D1821] -translate-y-1/2 rotate-90 origin-left z-30 w-[410vh] ">
        <ScrollVelocity2 />
      </div>
      <div className="absolute right-[8rem] pb-3 bg-[#B4CDED] text-[#0D1821] -translate-y-1/2 -rotate-90 origin-right z-30 w-[410vh]">
        <ScrollVelocity3 />
      </div>

      {/* Halaman pertama */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        {/* Animasi text dan foto */}
        <div className="mt-10 mb-5 flex md:flex-row items-center gap-x-[10rem] bg-[#344966] px-10 py-6  rounded-3xl cursor-crosshair">
          {/* Animasi text */}
          <div className="text-[4.5em] text-center md:text-left">
            <AnimatedText />
          </div>

          {/* Foto */}
          <div className="">
            <PixelTransition
              firstContent={
                <Image
                  src="/assets/mejir.png"
                  alt="atmin"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              }
              secondContent={
                <div className="w-full h-full grid place-items-center bg-[#0D1821] ">
                  <Image
                    src="/assets/New Project 5 ;[D0995BB].gif"
                    alt="atmin"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover z-20"
                  />

                  <p className="absolute font-black text-5xl text-white z-50">
                    Meow!
                  </p>
                </div>
              }
              gridSize={3}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div>
        </div>
      </div>

      {/* Halaman kedua */}
      <div className="relative z-10 bg-[#0D1821] rounded-b-[6rem] [box-shadow:0_2rem_0_2rem_#BFCC94]">
        <div>
          <TrueFocus
            sentence="ME!! 🗿😆"
            manualMode={true}
            blurAmount={10}
            borderColor="#BFCC94"
            animationDuration={1}
            pauseBetweenAnimations={1}
          />

          <BlurText
            text="Hi, I’m Bagus Prasetya Ramadhan, a student with a passion for web development & creative coding. Even though I’m still in school, I love experimenting with React, Next.js, and UI animations, turning ideas into real projects. I enjoy solving problems, designing interactive experiences, and constantly learning new things. Instead of waiting for the “perfect time” to start, I believe in diving in, building, breaking, and improving—because that’s how real learning happens! 🚀. Right now, I’m exploring Laravel to expand my backend development skills, with the goal of becoming a Fullstack Developer. I’m also working on a simple chatbot website using Next.js and LM Studio API, pushing my knowledge of AI integration in web apps. Besides coding, I love exploring technology trends, playing games, and discovering new tools like Tailwind CSS to enhance my workflow. I’m always open to connecting, collaborating, or just geeking out over cool tech stuff, so feel free to reach out! 😃"
            delay={0}
            animateBy="words"
            direction="bottom"
            className="text-lg mx-60 text-justify leading-loose tracking-wide text-foreground"
          />
        </div>
        <div className="flex items-center justify-evenly mt-10">
          <GitHubCard />
          <div className="">
            <Carousel
              baseWidth={350}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </div>
      </div>

      {/* Halaman ketiga */}
      <div className="absolute top-[214.5vh] z-20 min-w-full items-center justify-center rounded-b-[6rem] bg-[#f0f3ff]">
        <div className="w-full">
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>
      </div>
      <div className="absolute z-10 bg-[#BFCC94] min-h-screen min-w-full top-[310vh]">
        <div></div>
      </div>
    </div>
  );
}
