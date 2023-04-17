import React from "react";

export default function Projects() {
  return (
    <section className="flex gap-x-4 flex-col-reverse gap-y-8 md:grid grid-cols-project h-full px-[50px] md:px-[20px] lg:px-[50px] py-[50px] xl:px-[160px]">
      <div className="flex flex-col gap-y-10">
        <div className="flex">
          <div className="flex h-[450px] md:h-[350px] flex-col justify-start items-center md:items-start gap-y-4 text-black bg-white border-2 border-black rounded-lg lg:h-[250px] w-[650px] py-4 px-10">
            <h1 className="font-bold text-[30px]">PORTFOLIO</h1>
            <p className="text-[18px]">My Personal Portfolio</p>
            <ul className="flex flex-wrap w-[300px] gap-x-2 gap-y-2 justify-center items-center md:justify-start md:w-[200px] lg:w-[250px]">
              <li className="px-4 py-2 border-2 border-black">NextJS</li>
              <li className="px-4 py-2 border-2 border-black">ReactJS</li>
              <li className="px-4 py-2 border-2 border-black">Framer Motion</li>
              <li className="px-4 py-2 border-2 border-black">Tailwind</li>
            </ul>
          </div>
          <img src="" alt="" />
        </div>
        <div className="flex">
          <div className="flex h-[450px] md:h-[350px] flex-col justify-start items-center md:items-start gap-y-4 text-black bg-white border-2 border-black rounded-lg lg:h-[250px] w-[650px] py-4 px-10">
            <h1 className="font-bold text-[30px]">PORTFOLIO</h1>
            <p className="text-[18px]">My Personal Portfolio</p>
            <ul className="flex flex-wrap w-[300px] gap-x-2 gap-y-2 justify-center items-center md:justify-start md:w-[200px] lg:w-[250px]">
              <li className="px-4 py-2 border-2 border-black">NextJS</li>
              <li className="px-4 py-2 border-2 border-black">ReactJS</li>
              <li className="px-4 py-2 border-2 border-black">Framer Motion</li>
              <li className="px-4 py-2 border-2 border-black">Tailwind</li>
            </ul>
          </div>
          <img src="" alt="" />
        </div>
        <div className="flex">
          <div className="flex h-[450px] md:h-[350px] flex-col justify-start items-center md:items-start gap-y-4 text-black bg-white border-2 border-black rounded-lg lg:h-[250px] w-[650px] py-4 px-10">
            <h1 className="font-bold text-[30px]">PORTFOLIO</h1>
            <p className="text-[18px]">My Personal Portfolio</p>
            <ul className="flex flex-wrap w-[300px] gap-x-2 gap-y-2 justify-center items-center md:justify-start md:w-[200px] lg:w-[250px]">
              <li className="px-4 py-2 border-2 border-black">NextJS</li>
              <li className="px-4 py-2 border-2 border-black">ReactJS</li>
              <li className="px-4 py-2 border-2 border-black">Framer Motion</li>
              <li className="px-4 py-2 border-2 border-black">Tailwind</li>
            </ul>
          </div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="top-0 left-0 text-white md:px-[20px] lg:px-0">
        <div className="sticky top-0 left-0 flex flex-col gap-y-6">
          <h1 className="font-bold text-[40px]">Featured Projects</h1>
          <p>
            These are my featured projects, you can view all of my projects by
            clicking this link.
          </p>
          <p>
            As an aspiring fullstack developer, I am considering this as my
            success and a steping stone to achieve my goals.
          </p>
          <button className="px-6 py-4 font-bold text-black bg-white border-2 border-black md:py-2">
            VIEW MY PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}
