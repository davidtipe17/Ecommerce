import React from "react";
import SeachTextNavbar from "./SeachTextNavbar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white h-16 px-6">
      <div className="flex items-center">
        <span className="font-poppins font-bold text-4xl">ART & DAV</span>
      </div>
      <SeachTextNavbar />
      <ul className="flex space-x-6">
        <span>
          <li>
            <a href="">New In</a>
          </li>
        </span>
        <li>
          <a href="">Sofas</a>
        </li>
        <li>
          <a href="">Living</a>
        </li>
        <li>
          <a href="">Dining</a>
        </li>
        <li>
          <a href="">Workspace</a>
        </li>
        <li>
          <a href="">Bedroom</a>
        </li>
        <li>
          <a href="">Outdoor</a>
        </li>
        <li>
          <a href="">Lighting</a>
        </li>
        <li>
          <a href="">Rugs</a>
        </li>
        <li>
          <a href="">Decor</a>
        </li>
        <li>
          <a href="">Gift Cards</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
