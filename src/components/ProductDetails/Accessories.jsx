import React from "react";
import Card from "./Card";
import { accessoriesList } from "../../utils/data";
export default function Accessories() {
  return (
    <div className="w-screen h-full my-[10%]">
      <div className="w-[90%] m-auto flex flex-col justify-between">
        <div className="flex flex-col mt-4 md:flex-row text-gray-700">
          <h1 className="w-full md:w-1/2 text-[2.6rem] font-extrabold">
            Related Accessories.
          </h1>
          <span className="text-left w-full md:w-1/2 md:mt-0 mt-5">
            Our carefully curated collection offers a wide range of high-quality
            gear designed to elevate your outdoor experiences to new heights.
            Whether you're an avid camper, hiker, or adventurer, we have the
            perfect accessories to complement your journey.
          </span>
        </div>
        <div className="mt-20 flex flex-col md:flex-row md:gap-x-4 gap-y-4">
          {accessoriesList.map((accessory) => (
            <Card
              key={accessory.id}
              name={accessory.name}
              image={accessory.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
