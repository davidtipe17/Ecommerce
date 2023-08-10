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
          <li className="hover:border-b-4 hover:border-yellow-300">
            <a href="">New In</a>
          </li>
        </span>
        <span>
          <li className="hover:border-b-4 hover:border-yellow-300">
            <a href="">Sofas</a>
          </li>
        </span>
        <span>
          <li className="hover:border-b-4 hover:border-yellow-300">
            <a href="">Living</a>
          </li>
        </span>
        <span>
          <li className="hover:border-b-4 hover:border-yellow-300">
            <a href="">Dining</a>
          </li>
        </span>
        <span>
          <li className="hover:border-b-4 hover:border-yellow-300">
            <a href="">Workspace</a>
          </li>
        </span>
        <li className="hover:border-b-4 hover:border-yellow-300">
          <a href="">Bedroom</a>
        </li>
        <li className="hover:border-b-4 hover:border-yellow-300">
          <a href="">Outdoor</a>
        </li>
        <li className="hover:border-b-4 hover:border-yellow-300">
          <a href="">Lighting</a>
        </li>
        <li className="hover:border-b-4 hover:border-yellow-300">
          <a href="">Rugs</a>
        </li>
        <li className="hover:border-b-4 hover:border-yellow-300">
          <a href="">Decor</a>
        </li>
        <li className="hover:border-b-4 hover:border-yellow-300">
          <a href="">Gift Cards</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
