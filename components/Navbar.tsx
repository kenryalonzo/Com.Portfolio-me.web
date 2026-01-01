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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

          {/* Mobile Hamburger Menu Trigger - Visible only on small screens */}
          <div className="block md:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {/* Simple Hamburger Icon */}
              <div className="space-y-1.5">
                <span className={clsx("block h-0.5 w-6 bg-black transition-transform", { "rotate-45 translate-y-2": isMobileMenuOpen })} ></span>
                <span className={clsx("block h-0.5 w-6 bg-black transition-opacity", { "opacity-0": isMobileMenuOpen })}></span>
                <span className={clsx("block h-0.5 w-6 bg-black transition-transform", { "-rotate-45 -translate-y-2": isMobileMenuOpen })}></span>
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        <div className={clsx("md:hidden absolute top-full left-0 w-full bg-blue-50 border-t border-black/10 transition-all duration-300 ease-in-out overflow-hidden shadow-lg rounded-b-lg", {
          "max-h-0 opacity-0 invisible": !isMobileMenuOpen,
          "max-h-screen opacity-100 visible": isMobileMenuOpen
        })}>
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item, index) => {
              let sectionId = item.toLowerCase();
              // Logic reuse
              const idMap: { [key: string]: string } = {
                "Accueil": "hero",
                "À propos": "about",
                "Compétences": "features",
                "Projets": "projects",
                "Contact": "contact"
              };
              return (
                <a
                  key={index}
                  href={`#${idMap[item] || item.toLowerCase()}`}
                  className="text-black font-general text-lg font-medium p-3 hover:bg-black/5 rounded-lg text-center"
                  onClick={() => setIsMobileMenuOpen(false)} // Close on click
                >
                  {item}
                </a>
              )
            })}
            <a
              href="/My-CV.pdf"
              download
              className="flex items-center justify-center gap-2 text-black font-general text-lg font-medium p-3 hover:bg-black/5 rounded-lg border border-black/10"
            >
              <span>Mon CV</span>
              <MoveUpRight size={16} />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
