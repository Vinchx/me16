// page.jsx
"use client";
import { useEffect, useState } from "react";
import MobilePage from "./Home/MobilePage";
import DesktopPage from "./Home/DesktopPage";
import LargeDesktopPage from "./Home/LargeDesktopPage";

export default function Home() {
  const [screen, setScreen] = useState("loading"); // 'mobile' | 'desktop' | 'large'

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      if (width < 1500) setScreen("mobile");
      else if (width < 2560) setScreen("desktop");
      else setScreen("large");
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (screen === "loading") return null; // or loading spinner

  return (
    <>
      {screen === "mobile" && <MobilePage />}
      {screen === "desktop" && <DesktopPage />}
      {screen === "large" && <LargeDesktopPage />}
    </>
  );
}
