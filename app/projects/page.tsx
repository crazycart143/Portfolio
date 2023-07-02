import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "../../data/data.json";

export default function Page() {
  return (
    <section className="w-full h-full bg-black">
      <div className="flex flex-col items-center justify-center text-center text-white mt-[80px] px-6 md:px-0">
        <div className="w-full md:w-[550px] flex flex-col">
          <h1 className="font-bold text-[30px]">Welcome to my projects!</h1>
          <p className="font-normal text-[16px]">
            These outputs are my pride and testament to my dedication and
            expertise as a web developer.
          </p>
          <p className="mt-2">Feel free to check them out!</p>
        </div>
      </div>
      <div className="grid grid-cols-1 px-8 py-10 mt-16 text-white gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 md:gap-y-12">
        {data.map((project, index) => (
          <Link
            key={index}
            href={project.src}
            className="flex flex-col items-center justify-center w-full h-full text-center transition-all duration-300 transform rounded-xl hover:scale-105"
          >
            <Image
              src={project.image}
              width={500}
              height={500}
              alt={project.title}
              className="object-contain w-full rounded-2xl "
            />
            <h1 className="mt-4">{project.title}</h1>
            <p className="text-[12px] font-thin">{project.description}</p>
            {/* <ul className="flex flex-wrap items-center justify-center w-full gap-x-2 gap-y-2">
              {project.technologies.map((tech, index) => (
                <li key={index} className="px-4 py-2 border-2 border-black">
                  {tech}
                </li>
              ))}
            </ul> */}
          </Link>
        ))}
      </div>
    </section>
  );
}
