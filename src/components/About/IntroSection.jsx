import React from "react";
import ListItems from "../Dealer/ListItems";
import { productBenefitsList } from "../../utils/data";

export default function IntroSection() {
  return (
    <div className="h-full w-screen text-gray-700 ">
      <div className="bg-white h-full md:flex-row md:items-center">
        <div className="w-[90%] h-full m-auto mt-8 md:mt-[10%]">
          <div className="flex items-center gap-x-2">
            <img src="/icon.png" alt="" />
            <h1 className="text-2xl font-extrabold md:text-xl lg:text-xl tracking-wide">
              WHO WE ARE
            </h1>
          </div>
          <div className="flex flex-col mt-4 md:flex-row ">
            <h1 className="w-full text-[2.6rem] font-extrabold ">
              Our roots extend back 45 years as a distributor of recreational
              products to adventurers in the province of British Columbia.
            </h1>
          </div>
          <div className="flex flex-col mt-4 md:flex-row ">
            <img
              src="/Photo.png"
              alt=""
              className="w-full h-full md:w-1/2 text-[2.6rem] font-extrabold "
            />
            <span className="md:w-1/2 flex items-center justify-center my-4 md:my-0">
              <ul className="list-none space-y-3">
                {productBenefitsList.map((text, index) => (
                  <ListItems key={index} text={text} />
                ))}
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
