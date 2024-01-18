import React from "react";
import { SlidersHorizontal } from "lucide-react";

const Filters = ({ filterButtons }) => {
  return (
    <div>
      <div className="flex items-center my-5 ">
        <SlidersHorizontal size={20} />
        <h1 className="text-xl font-bold ml-2">Filters</h1>
      </div>
      <div className="flex space-x-2">
        {filterButtons.map((button, index) => (
          <button
            key={index}
            className="border-none rounded-lg w-full px-3 py-4 h-full bg-gray-100 text-black mb-6 hover:bg-gray-200"
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
