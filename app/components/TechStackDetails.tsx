export default function TechStackDetails() {
  return (
    <div className="flex px-[50px] bg-[#f2f2f4] flex-col justify-center items-center gap-y-8 w-full lg:h-[250px] h-full pb-12 lg:pb-0 ">
      <div className="flex flex-col items-center justify-center text-center text-black">
        <h1 className="font-bold text-[40px]">My Tech Stacks</h1>
        <p className="font-light text-[20px]">
          Technology stacks that I am currently working on.
        </p>
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-2 lg:gap-x-8">
        <img src="/html.png" alt="html" className="w-[54px]" />
        <img src="/css.png" alt="css" className="w-[54px] " />
        <img src="/js.png" alt="js" className="w-[54px] " />
        <img src="/react.png" alt="react" className="w-[68px]" />
        <img src="/nextjs.png" alt="nextjs" className="w-[54px] " />
        <img src="/mongodb.png" alt="mongodb" className="w-[54px] " />
        <img src="/firebase.png" alt="firebase" className="w-[46px]" />
        <img src="/typescript.png" alt="typescript" className="w-[50px]" />
        <img src="/github.png" alt="github" className="w-[54px] " />
        <img src="/nodejs.png" alt="github" className="w-[46px]" />
      </div>
    </div>
  );
}
