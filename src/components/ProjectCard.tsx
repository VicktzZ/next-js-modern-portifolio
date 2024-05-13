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
        <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
          {project.title}
        </h1>
        <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
          <Image src={project.img} fill alt="" />
        </div>
        <p className="w-80 md:96 lg:w-[500px] lg:text-lg xl:w-[600px]">
          {project.desc}
        </p>
        <Link className="flex justify-end" href={project.link}>
          <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See More</button>
        </Link>
      </div>
    </div>
  );
}
