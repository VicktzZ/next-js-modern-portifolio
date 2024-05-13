"use client";

import ProjectCard from "@/components/ProjectCard";
import { ProjectType } from "@/types";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function page() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Project 1",
      color: "from-cyan-300 to-blue-300",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quidem.",
      img: "/dev.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Project 2",
      color: "from-blue-300 to-violet-300",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quidem.",
      img: "/dev.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Project 3",
      color: "from-violet-300 to-pink-300",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quidem.",
      img: "/dev.jpg",
      link: "#",
    },
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh]" ref={ref}>
        <div className="w-screen relative h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-green-300 to-cyan-300" />
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-pink-300 to-red-300" />
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="size-64 md:size-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-lg">
                Front-end Developer and UI/UX Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="size-16 md:size-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
