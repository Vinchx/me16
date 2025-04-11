"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Lazy load komponen
const HomeMobile = dynamic(() => import("@/app/home/HomeMobile"), {
  ssr: false,
});
const HomeDesktop1080 = dynamic(() => import("@/app/home/HomeDesktop1080"), {
  ssr: false,
});
const HomeDesktop1200 = dynamic(() => import("@/app/home/HomeDesktop1200"), {
  ssr: false,
});

export default function Page() {
  const [screenType, setScreenType] = useState("normal");

  useEffect(() => {
    const checkScreen = () => {
      const height = window.innerHeight;

      if (height > 1200) {
        setScreenType("tall");
      } else if (height < 1080) {
        setScreenType("compact");
      } else {
        setScreenType("normal");
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      {screenType === "compact" && <HomeMobile />}
      {screenType === "normal" && <HomeDesktop1080 />}
      {screenType === "tall" && <HomeDesktop1200 />}
    </>
  );
}
