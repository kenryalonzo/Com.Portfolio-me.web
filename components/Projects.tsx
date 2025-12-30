"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MoveUpRight, Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    stack: string[];
    image: string;
    demoUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

const ProjectCard = ({
    title,
    description,
    stack,
    image,
    demoUrl,
    githubUrl,
    featured = false
}: ProjectCardProps) => {
    return (
        <div className={`group relative overflow-hidden rounded-lg ${featured ? 'md:col-span-2' : ''}`}>
            {/* Image avec overlay gradient */}
            <div className="relative h-full min-h-[300px] overflow-hidden bg-black">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="special-font mb-2 text-2xl text-white md:text-3xl">
                            {title}
                        </h3>

                        <p className="mb-4 font-robert-regular text-sm text-blue-50 md:text-base">
                            {description}
                        </p>

                        {/* Stack */}
                        <div className="mb-4 flex flex-wrap gap-2">
                            {stack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-violet-50/10 px-3 py-1 font-general text-xs text-blue-50 backdrop-blur-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3">
                            {demoUrl && (
                                <motion.a
                                    href={demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-full bg-yellow-300 px-4 py-2 font-general text-xs uppercase text-black transition-transform hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ExternalLink size={14} />
                                    <span>Demo</span>
                                </motion.a>
                            )}

                            {githubUrl && (
                                <motion.a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-full border border-blue-50/20 bg-white/5 px-4 py-2 font-general text-xs uppercase text-blue-50 backdrop-blur-sm transition-all hover:bg-white/10"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Github size={14} />
                                    <span>Code</span>
                                </motion.a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Projets placeholder
    // Projets Nathanael
    const projects = [
        {
            title: "Doualair",
            description: "Plateforme innovante pour la gestion et la visualisation de la qualité de l'air à Douala.",
            stack: ["React", "Node.js", "API REST", "Google Maps"],
            image: "img/project-Doualair-1.png",
            demoUrl: "#",
            githubUrl: "#",
            featured: true,
        },
        {
            title: "AlphaSpace",
            description: "Solution complète de gestion d'espace et de réservation en ligne.",
            stack: ["Next.js", "TypeScript", "Tailwind CSS"],
            image: "img/project-alphaSpace-1.png",
            demoUrl: "#",
            githubUrl: "#",
        },
        {
            title: "DevEvent",
            description: "Application événementielle pour développeurs, gestion de conférences et ticketing.",
            stack: ["React Native", "Firebase", "Mobile"],
            image: "img/project-devEvent-1.png",
            demoUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Frechel Shopping",
            description: "E-commerce moderne et performant avec expérience utilisateur optimisée.",
            stack: ["MERN Stack", "Stripe", "Redux"],
            image: "img/project-frechelShopping-1.png",
            demoUrl: "#",
            githubUrl: "#",
        },
    ];

    return (
        <section ref={ref} className="bg-black pb-52 pt-32" id="projects">
            <div className="container mx-auto px-3 md:px-10">
                <motion.div
                    className="mb-16 px-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] }}
                >
                    <p className="font-circular-web text-lg text-blue-50">
                        Projets Récents
                    </p>
                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        Une sélection de projets qui démontrent mes compétences en
                        développement web, design et résolution de problèmes.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.3,
                            },
                        },
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] },
                                },
                            }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
