import React from "react";
import Filters from "../About/Filters";
import Card from "../About/Card";
import { cardData } from "../../utils/data";
import { ambFilterButtons } from "../../utils/data";

export default function Introduction() {
  return (
    <div className="h-full w-screen text-gray-700 ">
      <div className="bg-white h-full md:flex-row md:items-center">
        <div className="w-[90%] h-full m-auto pt-8 md:pt-[10%] ">
          <div className="flex mt-4 justify-center items-center mb-10">
            <h1 className="text-[2.6rem] font-extrabold text-center">
              Marlon team ambassadors.
            </h1>
          </div>
          <div className="flex items-center justify-center text-center">
            <span className="w-[80%]">
              We at Marlon are PROUD to have a great group of Ambassadors to
              help us get the word out about our AWESOME product lines, help
              fine tune what we have to offer and test it to the max! We are
              always looking for Ambassadors for our various products!
            </span>
          </div>
          <div className="mt-40">
            <Filters filterButtons={ambFilterButtons} />
            <div className="flex flex-wrap gap-3 pb-10">
              {cardData.map((item, index) => (
                <Card
                  key={index}
                  image={item.image}
                  name={item.name}
                  post={""}
                  showAdditionalInfo={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
