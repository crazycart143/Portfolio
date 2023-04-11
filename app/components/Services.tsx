import React from "react";

export default function Services() {
  return (
    <section className="text-white flex flex-col justify-center items-center">
      <h1 className="mt-[100px] text-[30px] font-bold tracking-wider">
        What I do?
      </h1>
      <div className="flex flex-wrap h-full w-full justify-center items-center gap-x-28 mt-[50px] px-20">
        <div className="flex flex-col justify-center items-center">
          <img src="/web-development-logo.png" alt="web-development logo" />
          <h2 className="font-bold"> Web Development</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/web-design-logo.png" alt="web-design logo" />
          <h2 className="font-bold"> Web Design</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/responsive-design-logo.png" alt="web-design logo" />
          <h2 className="font-bold"> Responsive Design</h2>
        </div>
      </div>
    </section>
  );
}
