"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedText() {
  const textRef = useRef([]);

  useEffect(() => {
    const elements = textRef.current;

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 }, // Masuk dari bawah
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "bottom 100%", // Mulai lebih awal saat elemen mulai masuk viewport
            end: "top 50%", // Supaya animasi tetap terasa
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        el,
        { opacity: 1, y: 0 }, // Posisi normal
        {
          opacity: 0,
          y: -50, // Pergi ke atas
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 0%", // Animasi keluar lebih lambat (lebih rendah dari viewport)
            end: "top -50%", // Supaya animasi keluar lebih smooth
            scrub: false, // Menghindari animasi keluar yang terlalu cepat saat scroll
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      elements.forEach((el) => ScrollTrigger.getById(el)?.kill());
    };
  }, []);

  return (
    <div className="flex flex-col items-start font-bold leading-tight [text-shadow:0.5rem_0.2rem_0_black]">
      {["BAGUS", "PRASETYA", "RAMADHAN"].map((word, index) => (
        <span
          key={index}
          ref={(el) => (textRef.current[index] = el)}
          className="opacity-0"
        >
          {word}
        </span>
      ))}
    </div>
  );
}
