"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import { SpotifyNowPlaying } from "./SpotifyNowPlaying";

const ProfileCard = () => {
  let ref = useRef(null);
  let [style, setStyle] = useState<React.CSSProperties>({});

  let onMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || window.innerWidth < 1280) return;

    let { clientX, clientY } = e;
    let { width, height, x, y } = ref.current.getBoundingClientRect();
    let mouseX = Math.abs(clientX - x);
    let mouseY = Math.abs(clientY - y);
    let rotateMin = -15;
    let rotateMax = 15;
    let rotateRange = rotateMax - rotateMin;

    let rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    };

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    });
  }, []);

  let onMouseLeave = useCallback(() => {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg)" });
  }, []);

  useEffect(() => {
    let { current } = ref;
    if (!current) return;
    current.addEventListener("mousemove", onMouseMove);
    current.addEventListener("mouseleave", onMouseLeave);
    return () => {
      if (!current) return;
      current.removeEventListener("mousemove", onMouseMove);
      current.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [onMouseLeave, onMouseMove]);

  return (
    <div
      className="umami--mouseenter--profile-card-hover z-10 mb-8 scale-100 transition-all duration-200 ease-out hover:z-50 xl:mb-0 xl:hover:scale-[1.15]"
      style={{ perspective: "600px" }}
      ref={ref}
    >
      <div
        style={style}
        className="flex flex-col overflow-hidden shadow-cyan-100/50 transition-all duration-200 ease-out dark:shadow-cyan-700/50 xl:rounded-lg xl:shadow-lg"
      >
        <Image
          src="/static/images/avatar.jpeg"
          alt="avatar"
          width={550}
          height={350}
          className="object-cover"
          style={{ objectPosition: "50% 60%", width: 340, height: 220 }}
        />
        <SpotifyNowPlaying />
        <ProfileInfo />
        <span className="h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      </div>
    </div>
  );
};

export default ProfileCard;
