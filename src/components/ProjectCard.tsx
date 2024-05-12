import { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div
      className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color}`}
    >
      <div className="flex flex-col gap-8 text-white">
        <h1>{project.title}</h1>
        <div className="relative">
          <Image src={project.img} fill alt="" />
        </div>
        <p>{project.desc}</p>
        <Link href={project.link}>See More</Link>
      </div>
    </div>
  );
}
