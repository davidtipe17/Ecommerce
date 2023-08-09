import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-700 text-white">
      <div
        className="bg-neutral-700  text-center flex  flex-col justify-between"
        style={{
          height: "650px",
          margin: " 0rem 31rem",
          padding: "2.2rem 2.2rem 3.2rem",
        }}
      >
        <div className="flex justify-center space-x-6 mb-4 ">
          <div
            className="flex flex-col space-y-5"
            style={{
              width: "292px",
              height: "444px",
              padding: "0px 0px 10px 30px",
              margin: "0xp 0px 0px 0px",
            }}
          >
            <h4 className="font-bold">SHOP</h4>
            <ul className="space-y-5">
              <li>Sofas</li>
              <li>Living</li>
              <li>Dining</li>
              <li>Workspace</li>
              <li>Bedroom</li>
              <li>Lighting</li>
              <li>Rugs</li>
              <li>Decor</li>
            </ul>
          </div>
          <div
            className="flex flex-col space-y-5"
            style={{
              width: "292px",
              height: "444px",
              padding: "0px 0px 10px 30px",
              margin: "0xp 0px 0px 0px",
            }}
          >
            <h4 className="font-bold">
              <a href="">COMPANY</a>
            </h4>
            <ul className="space-y-5">
              <li>Reviews</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div
            className="flex flex-col space-y-5"
            style={{
              width: "292px",
              height: "444px",
              padding: "0px 0px 10px 30px",
              margin: "0xp 0px 0px 0px",
            }}
          >
            <h4 className="font-bold">ACCOUNT</h4>
            <ul className="space-y-5">
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Order Status</li>
            </ul>
          </div>
          <div
            className="flex flex-col space-y-5"
            style={{
              width: "292px",
              height: "444px",
              padding: "0px 0px 10px 30px",
              margin: "0xp 0px 0px 0px",
            }}
          >
            <h4 className="font-bold">HELP</h4>
            <ul className="space-y-5">
              <li>FAQ</li>
              <li>Return Policy</li>
              <li>Product Care</li>
              <li>Poly & Bark Trade</li>
              <li>Financing</li>
              <li>Contact Us</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div
            className="flex flex-col space-y-5"
            style={{
              width: "292px",
              height: "444px",
              padding: "0px 0px 10px 30px",
              margin: "0xp 0px 0px 0px",
            }}
          >
            <h4 className="font-bold">ACCESSIBILITY</h4>
            <ul className="space-y-5">
              <p>FAQ</p>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/2 flex flex-col items-center">
            <p>© 2023, Poly & Bark</p>
            <p>All Rights Reserved. Terms & Privacy</p>
          </div>
          <ul className=" w-1/2 flex justify-center space-x-4">
            <li className="w-8">
              <img
                src="\src\assets\facebook.png"
                alt="Fb"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-8">
              <img
                src="\src\assets\gorjeo.png"
                alt="Tw"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-8">
              <img
                src="\src\assets\pinterest.png"
                alt="Pt"
                style={{ filter: "invert(1)" }}
              />
            </li>
            <li className="w-8">
              <img
                src="\src\assets\logotipo-de-instagram.png"
                alt="Ig"
                style={{ filter: "invert(1)" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
