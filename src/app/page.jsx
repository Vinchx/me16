import Lanyard from "@/components/Lanyard/Lanyard";
import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity";
import ScrollVelocity2 from "@/components/ScrollVelocity/ScrollVelocity2";
import ScrollVelocity3 from "@/components/ScrollVelocity/ScrollVelocity3";
import Particles from "@/components/Particles/Particles";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import BlurText from "@/components/BlurText/BlurText";

export default function Home() {
  return (
    /* Div utama */
    <div className="relative">
      {/* Particles sebagai background */}
      <div className="absolute w-full h-full -z-10">
        {/* <Particles moveParticlesOnHover={true} /> */}
      </div>

      {/* scroll velocity */}
      <div className="absolute left-[8.5rem]  -translate-y-1/2 rotate-90 origin-left -z-10 w-[300vh]">
        <ScrollVelocity2 />
      </div>
      <div className="absolute right-[9rem]  -translate-y-1/2 -rotate-90 origin-right -z-10 w-[300vh]">
        <ScrollVelocity3 />
      </div>

      {/* Halaman pertama */}
      <div className="relative z-10 min-h-screen flex items-center justify-evenly">
        {/* Animasi text dan foto */}
        <div className="flex md:flex-row items-center gap-x-[22rem]">
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

      {/* Halaman kedua */}
      <div className="h-screen">
        <div>
          <BlurText
            text="Hi, I’m Bagus Prasetya Ramadhan, a student with a passion for web development & creative coding. Even though I’m still in school, I love experimenting with React, Next.js, and UI animations, turning ideas into real projects. I enjoy solving problems, designing interactive experiences, and constantly learning new things. Instead of waiting for the “perfect time” to start, I believe in diving in, building, breaking, and improving—because that’s how real learning happens! 🚀. Right now, I’m exploring Laravel to expand my backend development skills, with the goal of becoming a Fullstack Developer. I’m also working on a simple chatbot website using Next.js and LM Studio API, pushing my knowledge of AI integration in web apps. Besides coding, I love exploring technology trends, playing games, and discovering new tools like Tailwind CSS to enhance my workflow. I’m always open to connecting, collaborating, or just geeking out over cool tech stuff, so feel free to reach out! 😃"
            delay={0}
            animateBy="words"
            direction="bottom"
            className="text-lg mx-60 text-justify leading-loose tracking-wide text-foreground"
          />
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
