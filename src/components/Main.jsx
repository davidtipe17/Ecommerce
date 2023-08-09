import React from "react";

const Main = () => {
  return (
    <main>
      <div className="bg-cover bg-center text-white text-center flex flex-col justify-end items-start background-image-main">
        <h1 className="font-poppins text-4xl font-bold mb-4">Product venta</h1>
      </div>
      <section className=" text-sm grid-cols-4 mt-4 px-8">
        <ul className="flex ">
          <li className="w-1/4">
            <div className="flex items-center justify-center">
              <img
                src="\src\assets\ROG_Machine-logo_Wallpaper_4K.jpg"
                alt="Premium furniture"
                className="w-32 h-32"
              />
              <div>
                {" "}
                <p>Premium furniture.</p>
                <p>Modern designs.</p>
                <p>Excellent prices.</p>
              </div>
            </div>
          </li>

          <div className="flex items-center justify-center">
            <div className="border-l-2 border-yellow-500 h-16"></div>
          </div>

          <li className="w-1/4">
            <div className="flex items-center justify-center">
              <img
                src="\src\assets\ROG_Machine-logo_Wallpaper_4K.jpg"
                alt="0% APR available"
                className="w-32 h-32"
              />
              <div>
                <p>0% APR available</p>
                <p>for 12 & 24 month financing*.</p>
                <a href="#" className="font-bold underline">
                  Learn more
                </a>
              </div>
            </div>
          </li>

          <div className="flex items-center justify-center ">
            <div className="border-l-2 border-yellow-500 h-16"></div>
          </div>

          <li className="w-1/4">
            <div className="flex items-center justify-center">
              <img
                src="\src\assets\ROG_Machine-logo_Wallpaper_4K.jpg"
                alt="Try at home for 100 days"
                className="w-32 h-32"
              />
              <div>
                <p>Try at home for 100 days.</p>
                <p>Free returns*</p>
                <a href="#" className="font-bold underline">
                  Learn more
                </a>
              </div>
            </div>
          </li>

          <div className="flex items-center justify-center">
            <div className="border-l-2 border-yellow-500 h-16"></div>
          </div>

          <li className="w-1/4">
            <div className="flex items-center justify-center">
              <img
                src="\src\assets\ROG_Machine-logo_Wallpaper_4K.jpg"
                alt="Free shipping both ways"
                className="w-32 h-32"
              />
              <div>
                <p>Free shipping both ways*</p>
                <a href="#" className="font-bold underline">
                  Learn more
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <div
        className="text-center text-white flex flex-col justify-center px-8 space-y-5"
        style={{
          height: "330px",
          padding: "0rem 2.2rem",
          backgroundColor: "#25272a",
        }}
      >
        <h4 className=" text-3xl">JOIN OUR FAMILY</h4>
        <p>Get $25 off your first order of $100+</p>
        <p>New customers only. Code sent by email.</p>
        {/* flex items-center justify-center mt-4 */}
        <div className="flex items-center justify-center mt-4 pb-12">
          <div className="relative " style={{ width: "700px" }}>
            <input
              className="w-full border-b-2 border-white pl-4 pr-16 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
              type="text"
              placeholder="Email address"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-15 h-3 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 69 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M67 7H3M61 1l6 6-6 6"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
