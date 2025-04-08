"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGithub, FaDiscord, FaLinkedin, FaSteam } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const DEFAULT_ITEMS = [
  {
    title: "Instagram",
    description: "Follow me for photos and stories.",
    id: 1,
    url: "https://instagram.com/vinix169",
    icon: <BiLogoInstagramAlt className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Github",
    description: "Check out my latest projects and code.",
    id: 2,
    url: "https://github.com/Vinchx/",
    icon: <FaGithub className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Discord",
    description: "Join the community and chat with us.",
    id: 3,
    url: "https://discord.com/users/vinix16",
    icon: <FaDiscord className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Linkedin",
    description: "Connect with me professionally.",
    id: 4,
    url: "https://linkedin.com/in/yourusername",
    icon: <FaLinkedin className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Steam",
    description: "Let’s play — check out my Steam profile.",
    id: 5,
    url: "https://steamcommunity.com/id/Nzxtvinix",
    icon: <FaSteam className="h-[16px] w-[16px] text-white" />,
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

// 🧠 Perbaikan utama: Hook ini akan dipanggil statis
function useRotateTransforms(x, itemCount, trackItemOffset) {
  return Array.from({ length: itemCount }, (_, index) => {
    const range = [
      -(index + 1) * trackItemOffset,
      -index * trackItemOffset,
      -(index - 1) * trackItemOffset,
    ];
    const outputRange = [90, 0, -90];
    return useTransform(x, range, outputRange, { clamp: false });
  });
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const carouselItems = loop ? [...items, items[0]] : items;

  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const containerRef = useRef(null);

  const rotateYTransforms = useRotateTransforms(
    x,
    carouselItems.length,
    trackItemOffset
  );

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) return prev + 1;
          if (prev === carouselItems.length - 1) return loop ? 0 : prev;
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${
        round
          ? "rounded-full border border-white"
          : "rounded-[24px] border-4 border-[#B4CDED]"
      }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` }),
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${
            currentIndex * trackItemOffset + itemWidth / 2
          }px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => (
          <motion.div
            key={index}
            className={`relative shrink-0 flex flex-col ${
              round
                ? "items-center justify-center text-center bg-[#060606] border-0"
                : "items-start justify-between bg-[#344966] border-[#B4CDED] rounded-[12px]"
            } overflow-hidden cursor-grab active:cursor-grabbing`}
            style={{
              width: itemWidth,
              height: round ? itemWidth : "100%",
              rotateY: rotateYTransforms[index],
              ...(round && { borderRadius: "50%" }),
            }}
            transition={effectiveTransition}
          >
            <div className={`${round ? "p-0 m-0" : "mb-4 p-5"}`}>
              <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060606]">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  {item.icon}
                </a>
              </span>
            </div>
            <div className="p-5">
              <div className="mb-1 font-black text-lg text-foreground">
                {item.title}
              </div>
              <p className="text-sm text-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div
        className={`flex w-full justify-center ${
          round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
        }`}
      >
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? round
                    ? "bg-white"
                    : "bg-[#BFCC94]"
                  : round
                  ? "bg-[#555]"
                  : "bg-[#F0F4EF]"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
