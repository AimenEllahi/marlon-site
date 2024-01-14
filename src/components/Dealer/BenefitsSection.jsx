import React from "react";

export default function BenefitsSection() {
  return (
    <div className="h-screen w-screen border">
      <div className="bg-gray-100 h-full border md:flex md:items-center">
        <div className="w-[90%] m-auto mt-8 md:mt-[10%]">
          <div className="flex items-center gap-x-2">
            <img src="/icon.png" alt="" />
            <h1 className="text-2xl font-extrabold md:text-xl lg:text-xl tracking-wide">
              BENEFITS
            </h1>
          </div>
          <div className="flex flex-col mt-4 md:flex-row ">
            <h1 className="w-full md:w-1/2 text-[2.6rem] font-extrabold">
              Join Our Dealer Network.
            </h1>
            <span className="text-left w-full md:w-1/2 md:mt-0 mt-5">
              We’re looking for dealers, both big and small, that share our
              passion for making the outdoors fun. If you’re a business owner
              with the drive to grow your business through quality products and
              unrivaled customer care, then we need to have a chat.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
