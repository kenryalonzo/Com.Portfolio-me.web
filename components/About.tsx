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
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Bonjour, je suis Alex
        </p>

        <AnimatedTitle
          title="Créateur d'<b>e</b>xpériences <br /> digitales <b>i</b>nnovantes"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>Développeur Full-Stack passionné par l'excellence technique</p>
          <p className="text-gray-500">
            Je transforme des idées en applications web performantes et
            visuellement captivantes, en combinant code propre, design soigné
            et animations fluides pour créer des expériences mémorables.
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
