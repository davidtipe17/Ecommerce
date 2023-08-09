import React from "react";

const Main = () => {
  return (
    <main>
      <div className="bg-cover bg-center text-white text-center flex flex-col justify-end items-start background-image-main">
        <h1 className="font-poppins text-4xl font-bold mb-4">Product venta</h1>
      </div>
      <section className="flex items-center justify-center mt-8">
        <div className="flex space-x-4">
          <div className="flex items-center">
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
          <div className="border-l-2 border-yellow-500 h-32"></div>
          <div className="flex justify-center items-center">
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
          <div className="border-l-2 border-yellow-500 h-32"></div>
          <div className="flex  items-center">
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
          <div className="border-l-2 border-yellow-500 h-32"></div>
          <div className="flex  items-center">
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
        </div>
      </section>
      <section></section>
      <div className="text-center mt-8">
        <p>JOIN OUR FAMILY</p>
        <p>Get $25 off your first order of $100+</p>
        <p>New customers only. Code sent by email.</p>
        <div className="flex items-center justify-center mt-4">
          <input
            className="border-b border-gray-400 pl-2 pr-10 py-1 focus:outline-none"
            type="text"
            placeholder="Email address"
          />
          <img
            src="src\assets\flecha-correcta.png"
            alt="Subscribe"
            className="ml-2"
            style={{ width: "69px", height: "15px" }}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
