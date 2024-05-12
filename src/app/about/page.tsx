"use client";

import Brain from "@/components/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { RefObject, useRef } from "react";

export default function page() {
  const skills = [
    "Javascript",
    "Typescript",
    "React",
    "React Native",
    "Solid",
    "Next.js",
    "SvelteKit",
    "Angular",
    "Node.js",
    "Vite",
    "Express",
    "MongoDB",
    "Redux",
    "Web Sockets",
    "Tailwind CSS",
    "Material UI",
    "Figma",
    "PHP",
    "Java",
    "C#",
    "SQL",
    "Python",
  ];

  const containerRef = useRef<HTMLDivElement>(null)
  const skillRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ container: containerRef })

  const isSkillRefInView = useInView(skillRef, { once: true, margin: '-100px' });
  const isExperienceRefInView = useInView(experienceRef, { once: true });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        ref={containerRef}
        className="h-full overflow-x-hidden overflow-scroll lg:flex"
      >
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0">
          <div className="flex flex-col gap-12 justify-center">
            <Image
              src="/dev.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg whitespace-pre-wrap">
              I am a Full-Stack Developer with a passion for building digital
              solutions that empower users and businesses alike. With a knack
              for both front-end and back-end technologies, I craft responsive,
              efficient, and scalable web applications that deliver on both form
              and function.{"\n\n"}I believe in continuous learning and staying
              updated with the latest industry trends to deliver innovative
              solutions.
              {"\n\n"}I have a Associated Degree in Data Science and Software Engineering.
            </p>
            <span className="italic">
              Turning complexity into simplicity with every line of code.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <Image
                src="/signature.svg"
                alt="signature"
                width={100}
                height={33}
              />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill) => (
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  {skill}
                </div>
              ))}
            </motion.div>
            {/* SKILL SCROLL SVG */}
            {/* <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg> */}
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              <div className="flex justify-between h-48">
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Website Operator
                  </div>
                  <div className="p-3 text-sm italic">
                    As a fresh entrant in the field of website operations, I am
                    enthusiastic about applying my knowledge and skills to
                    manage and maintain dynamic websites.{" "}
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  <div className="p-1.5 ml-2.5 rounded bg-white text-sm font-semibold w-fit">
                    Simpress
                  </div>
                </div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>

              <div className="flex justify-between h-48">
                <div className="w-1/3 "></div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer UI/UX Designer{" "}
                  </div>
                  <div className="p-3 text-sm italic">
                    As a freelance UI/UX designer, I specialize in creating
                    seamless and visually compelling user experiences.{" "}
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - Present{" "}
                  </div>
                </div>
              </div>

              <div className="flex justify-between h-48">
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer Fullstack Devloper
                  </div>
                  <div className="p-3 text-sm italic">
                    As a seasoned freelance full-stack developer, I bring a
                    comprehensive suite of skills to the table, capable of
                    managing and executing projects from conception to
                    deployment.{" "}
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - Present{" "}
                  </div>
                </div>

                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}
