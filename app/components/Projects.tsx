import React from "react";

export default function Projects() {
  return (
    <section className="grid grid-cols-project px-[170px] py-[50px] relative">
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="sticky top-0 right-0 flex flex-col text-white gap-y-6">
        <h1 className="font-bold text-[40px]">Featured Projects</h1>
        <p>
          These are my featured projects, As an aspiring fullstack developer, I
          am considering this as my success and a steping stone to achieve my
          goals.
        </p>
        <button className="px-6 py-4 font-bold text-black bg-white border-2 border-black">
          VIEW MY PROJECTS
        </button>
      </div>
    </section>
  );
}
