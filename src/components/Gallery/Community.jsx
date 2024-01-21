import React from "react";
import Filters from "../About/Filters";
import { galleryFilterButtons } from "../../utils/data";
import ImageLayout from "./ImgLayout";

export default function Community() {
  return (
    <div className="h-full w-screen text-gray-700 ">
      <div className="bg-gray-100 h-[40vh] md:flex-row md:items-center"></div>
      <div className="relative">
        <img
          src="/Featured.png"
          alt=""
          className="w-[90%] m-auto h-[50vh] rounded-lg object-cover -mt-[65%] md:-mt-[12%]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <p className="font-bold md:text-5xl text-lg text-center w-[80%] mb-10">
            The Marlon community.
          </p>
        </div>
      </div>
      <div className="bg-white w-[100%] m-auto h-full md:flex-row md:items-center p-5">
        <Filters filterButtons={galleryFilterButtons} />
        <ImageLayout />
        <div className=" flex items-center justify-center">
          <button className="bg-gray-700 text-white px-10 py-2 rounded-md mt-4">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
