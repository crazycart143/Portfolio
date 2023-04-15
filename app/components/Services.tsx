import React from "react";

export default function Services() {
  return (
    <section className="text-white flex flex-col justify-center items-center px-[20px] lg:px-[100px]">
      <h1 className="mt-[50px] text-[40px] font-bold tracking-wider">
        What I do?
      </h1>
      <div className="flex flex-col flex-wrap h-full w-full justify-center items-center gap-y-28 mt-[50px] ">
        <div className="flex flex-col grid-cols-2 lg:grid gap-x-28">
          <div className="flex flex-col justify-center items-center text-center w-[400px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              viewBox="0 0 200 200"
              className="w-10 mb-[20px]"
            >
              <path
                fill="white"
                d="M22.8 17.1c-2.3 1.2-4.6 3.5-5.8 5.9-1.9 3.8-2 5.8-2 77.1 0 80.8-.3 77.4 6.4 82.2l3.1 2.2 74.3.3c72.9.2 74.3.2 78.2-1.8 2.6-1.3 4.7-3.4 6-6 2-3.9 2-5.3 1.8-78.2l-.3-74.3-2.2-3.1c-4.8-6.7-1.3-6.4-82.5-6.4-71 .1-73.4.2-77 2.1zM170 45v15H30V30h140v15zm0 75v50H30V70h140v50z"
              />
              <path
                fill="white"
                d="M110 45v5h10V40h-10v5zM130 45v5h10V40h-10v5zM150 45v5h10V40h-10v5zM104.1 82.7c-.6 2.1-4.9 19.3-9.6 38.3-4.7 19-8.8 35.2-9.1 36.1-.3 1.3.7 1.9 4.2 2.8 2.6.7 4.9 1 5.1.7.4-.3 19.1-73.6 20.3-79.2 0-.2-8.7-2.4-9.4-2.4-.3 0-1 1.7-1.5 3.7zM54 108.5 42.5 120l11.8 11.7L66 143.5l3.7-3.8 3.8-3.7-8-8-8-8 7.8-7.8c4.2-4.2 7.7-8.2 7.7-8.8 0-1.3-5.3-6.4-6.6-6.4-.5 0-6.1 5.2-12.4 11.5zM129.7 99.8c-1.5 1.5-2.7 3.2-2.7 3.7s3.5 4.5 7.7 8.7l7.8 7.8-7.8 7.8c-4.2 4.2-7.7 8.2-7.7 8.7 0 1.3 5.2 6.5 6.5 6.5.5 0 6.2-5.2 12.5-11.5l11.5-11.5-11.5-11.5c-6.3-6.3-12-11.5-12.5-11.5-.6 0-2.3 1.3-3.8 2.8z"
              />
            </svg>
            <h2 className="font-bold"> Front End Development</h2>
            <p className="mt-[24px]">
              Turning web designs and mockups into interactive and responsive
              website using Javascript, React and Next. Utilizing APIs to
              display data to the UI.
            </p>
          </div>
          <div>asd</div>
        </div>
        <div className="flex flex-col-reverse grid-cols-2 lg:grid gap-x-28">
          <div>asd</div>
          <div className="flex flex-col justify-end items-center text-center w-[400px]">
            <img
              src="/backend-icon.png"
              alt="web-development logo"
              className="w-10 mb-[20px]"
            />
            <h2 className="font-bold"> Back End Development</h2>
            <p className="mt-[24px]">
              Creating and setup back end API endpoints, routes, and database
              models using Express JS, Node JS, MongoDB, and adding
              authentication using JWT.
            </p>
          </div>
        </div>
        <div className="flex flex-col grid-cols-2 lg:grid gap-x-28">
          <div className="flex flex-col justify-center items-center text-center w-[400px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              viewBox="0 0 173 292"
              className="w-6 mb-[20px]"
            >
              <path
                fill="white"
                d="M16.9 2.4C9.7 5 3.1 12.3 1 20.1.3 22.5.1 66.6.2 148.2l.3 124.3 2.2 4.2c1.3 2.3 3.9 5.8 5.9 7.7 7 6.8 5.5 6.7 79.5 6.4 61.6-.3 66.7-.4 70-2.1 4.7-2.4 9.5-7.1 12.2-12.1l2.2-4.1v-253l-2.2-4.1c-2.6-4.9-7.3-9.8-11.7-12.2-2.8-1.6-8.9-1.7-70.6-1.9-53.8-.2-68.2 0-71.1 1.1zm96.9 23.8.3 4.8H59v-4.3c0-2.4.3-4.7.7-5 .4-.4 12.6-.6 27.2-.5l26.6.3.3 4.7zM152.1 52c1.9 1 1.9 3.1 1.9 86.5s0 85.5-1.9 86.5c-3 1.5-130.3 1.4-131.9-.2-.9-.9-1.2-21.5-1.2-86.5 0-80.1.1-85.3 1.8-86.2 2.4-1.4 128.6-1.5 131.3-.1zM90.5 238.1c4.4 1.2 8.9 4.9 11.1 9.1 2.2 4.2 1.8 11.9-.8 15.8-4 5.8-7.2 7.5-14.3 7.5-7.1 0-10.3-1.7-14.3-7.6-2-2.8-2.3-4.4-2-9.4.6-9.5 5.3-14.4 15.8-16.4.3 0 2.3.4 4.5 1z"
              />
            </svg>
            <h2 className="font-bold"> Responsive Design</h2>
            <p className="mt-[24px]">
              Make sure that the web design is responsive and adapting to
              different screen size across different devices.
            </p>
          </div>
          <div>asd</div>
        </div>
      </div>
    </section>
  );
}
