import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFiaWFubWMyMDIzIiwiYSI6ImNsb3EyNXZ0NjBkNjMycWxuYnR4dHBoamUifQ.Ixf-PoC7qOcveb-NoatYiA";

function Map() {
  const mapContainer = useRef(null);

  const [dealers, setDealers] = useState([]);
  const [selectedDealer, setSelectedDealer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapi-api-2jzf.onrender.com/api/dealers?populate=*"
        );
        const data = await response.json();

        setDealers(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      center: [-111, 54.6667568],
      zoom: 4,
      style: "mapbox://styles/mapbox/light-v10",
    });

    // dealers.forEach((dealer) => {
    //   const { id, name, latitude, longitude } = dealer.attributes;
    //   const marker = new mapboxgl.Marker()
    //     .setLngLat([parseFloat(longitude), parseFloat(latitude)])
    //     .addTo(map);

    //   marker.getElement().innerHTML =
    //     "<div class='h-5 w-5 bg-slate-800 rounded-full'></div>";

    //   marker.getElement().style.cursor = "pointer";

    //   marker.getElement().addEventListener("click", () => {
    //     setSelectedDealer(dealer);
    //     map.flyTo({
    //       center: [parseFloat(longitude), parseFloat(latitude)],
    //       zoom: 15,
    //     });
    //   });
    // });

    return () => map.remove();
  }, [dealers]);

  return (
    <div className=" w-screen h-full bg-gray-100 ">
      <div className="flex flex-col justify-between items-center w-[90%] m-auto">
        <h1 className="text-gray-700 p-10">
          Here are the closest dealers to you.
        </h1>

        <div
          className="relative w-full h-[80vh] rounded-lg my-12"
          ref={mapContainer}
        >
          <div className="absolute z-10 h-auto md:w-[25vw] w-[80vw] bottom-5 right-5 bg-black bg-opacity-60 text-white p-4 rounded-lg font-sans">
            <h3 className="text-2xl font-bold">Checkpoint Yamaha</h3>
            <h3 className="font-bold mt-5">Address:</h3>
            <p> British Columbia Canada V3C 6L2</p>
            <h3 className="font-bold mt-5">Phone:</h3>
            <p>604-461-3434</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
