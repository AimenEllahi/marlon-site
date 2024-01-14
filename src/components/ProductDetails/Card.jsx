import React from "react";

export default function Card({ name, image }) {
  return (
    <div className="relative w-full md:w-1/4 h-full overflow-hidden rounded-lg">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
      <div className="absolute bottom-4 left-4 text-white z-20">
        <p className="text-3xl font-bold">{name}</p>
        <p className="font-thin">See More</p>
      </div>
    </div>
  );
}
