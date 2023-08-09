import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white h-16 px-6">
      <div className="flex items-center">
        <span className="font-poppins font-bold text-xl">ARTDAV</span>
      </div>
      <div className="relative">
        <input
          className="border-b border-gray-400 pl-2 pr-10 py-1 focus:outline-none"
          type="text"
          placeholder="Search for products"
        />
        <img
          src="src\assets\flecha-correcta.png"
          alt="Search"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8"
        />
        <img
          src="\src\assets\lupa.png"
          alt="Arrow"
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
          style={{ width: "44px", height: "10px" }}
        />
      </div>
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
