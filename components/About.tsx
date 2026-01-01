"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    // Animate text opacity out as scroll progresses
    gsap.to("#about-text", {
      scrollTrigger: {
        trigger: "#clip",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      opacity: 0,
      y: -50,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div id="about-text" className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Bonjour, je suis Nathanael
        </p>

        <AnimatedTitle
          title="Développeur Web <br /> et Mobile <b>F</b>ull-Stack"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>Développeur full-stack passionné par l'écosystème JavaScript</p>
          <p className="text-gray-500">
            Expert en React, Node.js et TypeScript, je crée des applications web et mobiles performantes et centrées sur l'utilisateur.
            Fort d'expériences concrètes comme le développement du site Doualair, je transforme vos idées en réalité digitale.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Developer workspace"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
