import React from "react";

export default function page() {
  return (
    <section className="bg-black h-[100vh] w-full">
      <div className="flex flex-col items-center justify-center text-center text-white mt-[80px]">
        <div className="w-[550px] flex flex-col">
          <h1 className="font-bold text-[30px]">Welcome to my projects!</h1>
          <p className="font-normal text-[16px] ">
            These outputs are my pride and testament to my dedication and
            expertise as a web developer. Each project represents the
            culmination of countless hours of hard work, attention to detail,
            and a relentless pursuit of excellence.
          </p>
          <p className="mt-2">Feel free to check them out!</p>
        </div>
      </div>
      <div className="flex w-full h-full py-10"></div>
    </section>
  );
}
