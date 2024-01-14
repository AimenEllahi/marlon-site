import React from "react";
import DropdownFeatures from "./DropdownFeatures";
import { featuresList } from "../../utils/data";

export default function Features() {
  return (
    <div className="md:w-1/4 w-full h-full bg-gray-100 flex flex-col px-12 py-8 ">
      {featuresList.map((featureGroup, index) => (
        <DropdownFeatures key={index} featureGroup={featureGroup} />
      ))}
      <button className="bg-white border-none rounded-md p-2 m-2">
        Warranty
      </button>
      <button className="bg-white border-none rounded-md p-2 m-2">
        Features
      </button>
    </div>
  );
}
