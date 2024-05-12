"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { LinkType } from "@/types";
import NavLink from "./NavLink";
import { Variants, motion } from "framer-motion";

export default function Navbar() {
  
  // LINKS
  const links: LinkType[] = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portifolio", title: "Portifolio" },
    { url: "/contact", title: "Contact" },
  ];

  // STATES VARIABLES
  const [open, setOpen] = useState(false);

  // FRAMER MOTION VARIANTS ANIMATION
  const menuVariants: Record<'top' | 'center' | 'bottom', Variants> = {
    top: {
      closed: {
        rotate: 0,
      },

      opened: {
        rotate: 45,
        backgroundColor: "white",
      },
    },

    center: {
      closed: {
        opacity: 1,
      },

      opened: {
        opacity: 0,
      },
    },

    bottom: {
      closed: {
        rotate: 0,
      },

      opened: {
        rotate: -45,
        backgroundColor: "white",
      },
    },
  };

  const listVariants: Variants = {
    closed: {
      x: '100vw'
    },
  
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  }

  const listItemVariants: Variants = {
    closed: {
      x: -10,
      opacity: 0
    },

    opened: {
      x: 0,
      opacity: 1
    }
  }

  // FUNCTION RETURN
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Vitor</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        <Link target="_blank" href="https://github.com/VicktzZ">
          <Image src="/github.png" height={24} width={24} alt="github" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/vitor-hugo-rodrigues-dos-santos-469571210/"
        >
          <Image src="/linkedin.png" height={24} width={24} alt="linkedin" />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/vitronks">
          <Image src="/instagram.png" height={24} width={24} alt="instagram" />
        </Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
        >
          <motion.div
            variants={menuVariants.top}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={menuVariants.center}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={menuVariants.bottom}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex items-center flex-col justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <motion.div variants={listItemVariants}>
                <NavLink key={link.title} link={link} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
