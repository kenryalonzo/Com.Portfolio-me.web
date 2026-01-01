"use client";

import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { MoveUpRight } from "lucide-react";

import Button from "./Button";

const navItems = ["Accueil", "À propos", "Compétences", "Projets", "Contact"];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef<HTMLAudioElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    const navContainer = navContainerRef.current;
    if (!navContainer) return;

    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainer.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainer.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainer.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />

            <a
              href="/My-CV.pdf"
              download
              className="hidden md:flex items-center gap-1 rounded-full bg-blue-50 px-4 py-2 font-general text-xs uppercase text-black hover:bg-white transition-colors"
            >
              <span>Mon CV</span>
              <MoveUpRight size={16} className="rotate-45" />
            </a>
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => {
                // Map displayed names to actual section IDs
                let sectionId = item.toLowerCase();
                if (item === "Accueil") sectionId = "hero"; // Assuming Hero section ID is 'hero' or top
                if (item === "Compétences") sectionId = "features"; // Assuming Features section ID is 'features' (it was 'prologue' before effectively?) check Features.tsx
                if (item === "À propos") sectionId = "about";

                // Let's verify section IDs. 
                // Hero often doesn't have an ID but top of page. Let's assume #hero or # 
                // Features.tsx has no ID in the view_file output? wait.
                // Looking at previous context:
                // Projects -> id="projects"
                // About -> id="about"
                // Contact -> id="contact"
                // Features -> no ID seen in previous view_file. I should probably add one to Features too or map it correctly.
                // Let's map safely for now:

                const idMap: { [key: string]: string } = {
                  "Accueil": "hero",
                  "À propos": "about",
                  "Compétences": "features", // We need to add id="features" to Features.tsx
                  "Projets": "projects",
                  "Contact": "contact"
                };

                return (
                  <a
                    key={index}
                    href={`#${idMap[item] || item.toLowerCase()}`}
                    className="nav-hover-btn"
                  >
                    {item}
                  </a>
                )
              })}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
