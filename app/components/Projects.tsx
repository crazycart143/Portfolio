import React from "react";
import data from "../../data/data.json";

export default function Projects() {
  return (
    <section className="flex gap-x-4 lg:gap-x-10 flex-col-reverse gap-y-8 md:grid grid-cols-project h-full px-[50px] md:px-[20px] lg:px-[50px] py-[50px] xl:px-[160px] max-w-[1400px]">
      <div className="flex flex-col gap-y-10">
        {data.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full h-full py-4 text-black bg-white border-2 border-black rounded-lg"
          >
            <div className="flex flex-col items-center justify-center gap-y-4 ">
              <h1 className="font-bold text-[30px]">{project.title}</h1>
              <p className="text-[18px] ">{project.description}</p>
              <ul className="flex flex-wrap w-[300px] gap-x-2 gap-y-2 justify-center items-center  md:w-[400px] lg:w-[500px]">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="px-4 py-2 border-2 border-black">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={project.image}
              alt={`project ${index + 1} img`}
              className="w-full  mt-[30px] px-4 md:w-[500px] lg:w-[700px] object-contain"
            />
          </div>
        ))}
      </div>
      <div className="top-0 left-0 text-white md:px-[20px] lg:px-0">
        <div className="sticky top-0 left-0 flex flex-col gap-y-6">
          <h1 className="font-bold text-[40px] ">Featured Projects</h1>
          <p>
            These are my featured projects, you can view all of my projects by
            clicking this link.
          </p>
          <p>
            As an aspiring fullstack developer, I am considering this as my
            success and a stepping stone to achieve my goals.
          </p>
          <button className="px-6 py-4 font-bold text-black bg-white border-2 border-black md:py-2">
            VIEW MY PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}
