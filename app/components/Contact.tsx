export default function Contact() {
  return (
    <div className="flex gap-x-10 py-[150px] px-[200px] justify-center items-center">
      <div className="flex flex-col gap-y-4 w-[500px]">
        <h1 className="font-bold text-[40px]">Let's work together.</h1>
        <p className="text-[22px]">
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
