import { Variants, Transition } from "framer-motion";

// Check if user prefers reduced motion
export const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Subtle easing curves for professional feel
export const easings = {
    smooth: [0.6, 0.01, 0.05, 0.95],
    softSpring: [0.25, 0.46, 0.45, 0.94],
    gentle: [0.33, 1, 0.68, 1],
};

// Default spring configuration - very subtle
export const spring: Transition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
    mass: 0.5,
};

// Gentle spring for micro-interactions
export const gentleSpring: Transition = {
    type: "spring",
    stiffness: 150,
    damping: 20,
    mass: 0.3,
};

// Fade in variant - subtle and professional
export const fadeIn: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easings.smooth,
        },
    },
};

// Slide up variant - very subtle (20px max)
export const slideUp: Variants = {
    hidden: {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: easings.smooth,
        },
    },
};

// Stagger children - for cascade effects
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// Scale variant - very subtle for buttons
export const scaleOnHover = {
    rest: { scale: 1 },
    hover: {
        scale: 1.02,
        transition: gentleSpring,
    },
    tap: {
        scale: 0.98,
        transition: gentleSpring,
    },
};

// Slide down for navbar
export const slideDown: Variants = {
    hidden: {
        y: prefersReducedMotion ? 0 : -20,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easings.smooth,
        },
    },
};

// Magnetic effect configuration
export const magneticConfig = {
    strength: 0.3, // Very subtle pull
    maxDistance: 50, // Maximum distance for effect
};

// Parallax configuration - very subtle
export const parallaxConfig = {
    textOffset: 15, // Maximum parallax offset in pixels
    imageOffset: 25,
};
