import React from "react";
import PhotoAlbum from "react-photo-album";

const ImageLayout = () => {
  const images = [
    { src: "/Joinusimg.jpg", width: 1400, height: 800 },
    { src: "/Joinusimg.jpg", width: 1800, height: 600 },
    { src: "/Joinusimg.jpg", width: 800, height: 900 },
    { src: "/Joinusimg.jpg", width: 800, height: 600 },
    { src: "/Joinusimg.jpg", width: 1400, height: 800 },
    { src: "/Joinusimg.jpg", width: 1800, height: 600 },
    { src: "/Joinusimg.jpg", width: 800, height: 800 },
    { src: "/Joinusimg.jpg", width: 800, height: 600 },
  ];

  return <PhotoAlbum layout="rows" photos={images} />;
};

export default ImageLayout;
