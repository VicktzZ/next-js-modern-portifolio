"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function page() {
  const defaultText = "Hi. I am Vitor Santos, a UI/UX Designer and a ";

  const sequence = [
    defaultText + "Web Developer",
    2000,
    defaultText + "Backend Developer",
    2000,
    defaultText + "Software Engineer",
    2000,
    defaultText + "Mobile Developer",
    2000,
    defaultText + "Freelancer",
    4000,
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex gap-8 flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image
            className="object-contain"
            src="/headerimage.png"
            alt=""
            fill
            sizes="(100vw, 100vh)"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 items-center justify-center">
          <TypeAnimation
            className="text-4xl md:text-6xl items-center font-bold"
            sequence={sequence}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
          />

          <p className="md:text-xl">
            From Pixels to Performance: Unveiling Web Wonders One Code Line at a
            Time.
          </p>
          {/* BUTTONS */}
          <div className="flex gap-4 w-full ">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link href="/portifolio">View my work</Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              <Link href="/contact">Contact me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
