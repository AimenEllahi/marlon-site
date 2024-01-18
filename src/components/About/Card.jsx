import React from "react";

export default function Card({ image, name, post }) {
  return (
    <div className="relative w-full md:w-[29vw] rounded-lg">
      <img src={image} alt="" className="w-full h-full" />
      {/* <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> */}
      <div className="absolute inset-0 flex flex-col justify-end items-center px-4 py-2 text-white mb-4">
        <p className="font-bold text-3xl">{name}</p>
        <p>{post}</p>
      </div>
    </div>
  );
}
