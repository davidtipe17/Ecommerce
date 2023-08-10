import React from "react";

const SeachTextNavbar = () => {
  return (
    <div className="relative " style={{ width: "425px" }}>
      <input
        className="w-full border-b border-black pl-10 pr-12 py-2 focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Search for products"
        style={{ "::placeholder": { color: "black" } }}
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 15l5.5 5.5M21 10h-8"
          ></path>
          <circle cx="10" cy="10" r="7"></circle>
        </svg>
      </div>
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <button>
          <svg
            className="w-11 h-2 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 44 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M42 5H2M40 1l4 4-4 4"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SeachTextNavbar;
