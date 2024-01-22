import React, { useState } from "react";
import { X } from "lucide-react";

export default function Card({ image, name, post, showAdditionalInfo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full md:w-[29vw] rounded-lg">
      <img src={image} alt="" className="w-full h-full cursor-pointer" />

      <div
        onClick={handleImageClick}
        className="absolute border cursor-pointer inset-0 flex flex-col justify-end items-center px-4 py-2 text-white pb-4"
      >
        <p className="font-bold text-3xl">{name}</p>
        <p>{post}</p>
      </div>

      {isModalOpen && (
        <div className="fixed border z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] max-w-2xl bg-white p-8 rounded-lg">
          <div className="flex gap-x-2">
            <div className="flex flex-col md:gap-y-16 gap-y-4">
              <p className="font-bold text-sm text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis quis repellendus officia! Obcaecati dolor iusto harum
                minima tempora quam? Sunt, reprehenderit est cumque ducimus
                recusandae officiis maiores! Nulla, totam vel. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Corporis quis repellendus
                officia! Obcaecati dolor iusto harum minima tempora quam? Sunt,
                reprehenderit est cumque ducimus recusandae officiis maiores!
                Nulla, totam vel.
              </p>
              {showAdditionalInfo && (
                <div className="flex flex-col md:flex-row md:gap-x-2 gap-y-1">
                  <img src="Photo.png" alt="" className="h-32" />
                  <img src="Photo.png" alt="" className="h-32" />
                  <img src="Photo.png" alt="" className="h-32" />
                </div>
              )}
              <div className="flex gap-x-2 items-center">
                <img src="/in.png" alt="" className="h-8 w-8" />
                {showAdditionalInfo && (
                  <>
                    <img src="/fb.png" alt="" className="h-6 w-6" />
                    <img src="/insta.png" alt="" className="h-8 w-8" />
                  </>
                )}
              </div>
            </div>
            <div>
              <X
                className="w-6 h-6 cursor-pointer"
                onClick={handleCloseModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
