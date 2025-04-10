"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HomeMobile = dynamic(() => import("@/app/home/HomeMobile"), {
  ssr: false,
});
const HomeDesktop = dynamic(() => import("@/app/home/HomeDesktop"), {
  ssr: false,
});

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerHeight > 1200);
    };

    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile ? <HomeMobile /> : <HomeDesktop />;
}
