export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row gap-x-10 py-[50px] md:py-[180px] md:justify-start lg:py-[150px] px-[50px] md:px-[50px] justify-center items-center lg:justify-center">
      <div className="flex flex-col gap-y-6 text-center md:text-start w-full lg:w-[500px]">
        <h1 className="font-bold text-[40px]">Let&apos;s work together.</h1>
        <p className="text-[18px] lg:text-[22px] xl:text-[20px]">
          Contact me if you think that I am qualified for your project or
          request a ready made projects if you are in a hurry.
        </p>
        <button className="py-2 bg-white border-2 border-black rounded-lg text-[14px] md:px-2">
          Sorry. Requesting projects is not allowed at this time.
        </button>
      </div>
      <img
        src="/contact-img.png"
        alt="contact image"
        className="md:max-w-[56%]"
      />
    </div>
  );
}
