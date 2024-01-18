import React from "react";
import icon from "/icon.png";

const ListItems = ({ text }) => (
  <li className="flex items-center space-x-2">
    <img src={icon} alt="Bullet Icon" className="w-4 h-4" />
    <span className="text-xl font-thin">{text}</span>
  </li>
);

export default ListItems;
