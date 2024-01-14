import React from "react";
import Features from "./Features";

const Viewer = () => {
  const imageUrls = [
    "/Img.png",
    "/Img1.png",
    "/Img2.png",
    "/Img3.png",
    "/Img1.png",
    "/Img.png",
    "/Img3.png",
    "/Img1.png",
    "/Img2.png",
    "/Img3.png",
  ];

  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div
      className={`md:h-[130vh] h-full w-full flex flex-col md:flex-row justify-between text-gray-700 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="md:w-3/4 w-full px-16 py-10 ">
        <div className="h-full flex flex-col gap-y-4">
          <div className="border border-black md:h-[60%] h-[40vh] rounded-lg p-4">
            <span className={`text-2xl ${isDarkMode ? "text-white" : ""}`}>
              360 Viewer
            </span>
            <hr className="border-gray-400 border-1 w-full mt-2" />
          </div>
          <div className=" md:h-[20%] h-[15vh] w-full overflow-auto ">
            <div className="flex gap-x-2">
              {imageUrls.map((imageUrl, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 md:h-32 md:w-60 h-28 overflow-hidden rounded-lg"
                >
                  <img
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="h-[20%] flex flex-col space-y-2">
            <span
              className={`text-2xl ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
            >
              Description
            </span>
            <hr className="border-gray-400 border-1 w-full mt-2" />
            <span className={isDarkMode ? "text-white" : "text-gray-700"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              velit, eaque repudiandae dolores vero provident, eum accusamus,
              minus unde ea est praesentium enim reiciendis corrupti! Architecto
              vitae doloribus officia sed!
            </span>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Viewer;
