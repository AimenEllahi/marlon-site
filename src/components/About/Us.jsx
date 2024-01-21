import React from "react";

export default function Us({
  image,
  heading,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="relative w-full h-full">
      <img src={image} alt="" className="w-full h-full object-cover" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="flex items-center justify-center gap-x-2 md:mb-10 mb-2">
          <img src="/icon.png" alt="" />
          <h1 className="text-lg font-extrabold md:text-xl lg:text-xl tracking-wide">
            {heading}
          </h1>
        </div>
        <p className="font-bold md:text-5xl text-lg text-center w-[80%] md:mb-10 mb-2">
          {description}
        </p>
        <button
          className="bg-white text-gray-400 px-10 py-2 rounded-md mt-4"
          onClick={buttonLink}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
