export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row gap-x-10 py-[50px] lg:py-[150px] px-[50px] lg:px-[200px] justify-center items-center">
      <div className="flex flex-col gap-y-6 text-center lg:text-start w-[400px] lg:w-[500px]">
        <h1 className="font-bold text-[40px]">Let's work together.</h1>
        <p className="text-[18px] lg:text-[22px]">
          Contact me if you think that I am qualified for your project or
          request a ready made projects if you are in a hurry.
        </p>
        <button className="py-2 bg-white border-2 border-black rounded-lg">
          Sorry. Requesting projects is not allowed at this time.
        </button>
      </div>
      <img src="/contact-img.png" alt="contact image" />
    </div>
  );
}
