"use client";

import { motion } from "framer-motion";

interface AnimatedGradientProps {
    variant?: "frontend" | "backend" | "animations" | "devops" | "more";
}

const AnimatedGradient = ({ variant = "frontend" }: AnimatedGradientProps) => {
    const gradients = {
        frontend: {
            colors: "from-blue-500 via-purple-500 to-pink-500",
            animation: "gradient-x",
        },
        backend: {
            colors: "from-green-500 via-teal-500 to-cyan-500",
            animation: "gradient-y",
        },
        animations: {
            colors: "from-orange-500 via-red-500 to-pink-500",
            animation: "gradient-xy",
        },
        devops: {
            colors: "from-indigo-500 via-blue-500 to-purple-500",
            animation: "gradient-x",
        },
        more: {
            colors: "from-yellow-500 via-orange-500 to-red-500",
            animation: "gradient-y",
        },
    };

    const config = gradients[variant];

    return (
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${config.colors} opacity-60 blur-3xl`}
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <motion.div
                className={`absolute inset-0 bg-gradient-to-tr ${config.colors} opacity-40 blur-2xl`}
                animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [90, 0, 90],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Overlay pour assurer la lisibilité */}
            <div className="absolute inset-0 bg-black/40" />
        </div>
    );
};

export default AnimatedGradient;
