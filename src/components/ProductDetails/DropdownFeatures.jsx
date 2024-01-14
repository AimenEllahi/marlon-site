import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function DropdownFeatures({ featureGroup }) {
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

  const handleToggle = () => {
    setIsFeaturesVisible(!isFeaturesVisible);
  };

  return (
    <div className="relative w-full bg-gray-100 font-thin">
      <div className="flex flex-col justify-between p-2 cursor-pointer rounded-lg">
        <div className="flex justify-between items-center my-2">
          <span className="text-md">{featureGroup.heading}</span>

          <div onClick={handleToggle} className=" rounded-md">
            {isFeaturesVisible ? <ChevronUp /> : <ChevronDown />}
          </div>
        </div>
        <hr className="border-black border-1 w-full" />
        {isFeaturesVisible && (
          <div className="transition duration-300 my-2">
            <ul className="list-disc list-inside font-bold text-sm ">
              {featureGroup.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
