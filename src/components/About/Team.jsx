import React from "react";
import Filters from "./Filters";
import Card from "./Card";
import { cardData } from "../../utils/data";
import { FilterButtons } from "../../utils/data";

export default function Team() {
  return (
    <div className="h-full w-screen text-gray-700 ">
      <div className="bg-white h-full md:flex-row md:items-center">
        <div className="w-[90%] h-full m-auto pt-8 md:pt-[10%] ">
          <div className="flex items-center justify-center gap-x-2">
            <img src="/icon.png" alt="" />
            <h1 className="text-2xl font-extrabold md:text-xl lg:text-xl tracking-wide">
              OUR DEDICATED TEAM
            </h1>
          </div>
          <div className="flex mt-4 justify-center items-center">
            <h1 className="md:text-[2.6rem] text-2xl text-center font-extrabold ">
              Meet our passionate team of outdoor adventurers.
            </h1>
          </div>
          <Filters filterButtons={FilterButtons} />
          <div className="flex flex-wrap gap-3 pb-10">
            {cardData.map((item, index) => (
              <Card
                key={index}
                image={item.image}
                name={item.name}
                post={item.post}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
