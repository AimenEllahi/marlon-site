import React from "react";
import Map from "../components/ProductDetails/Map";
import Viewer from "../components/ProductDetails/Viewer";
import Accessories from "../components/ProductDetails/Accessories";

export default function ProductDetails() {
  return (
    <div>
      <Viewer />
      <Map />
      <Accessories />
    </div>
  );
}
