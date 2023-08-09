import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 ">
      <div
      className="bg-gray-300  text-center py-6"
        style={{
          height: "650px",
          margin: " 0rem 33rem",
          padding: "2.2rem 2.2rem 3.2rem",
        }}
      >
        <div className="flex justify-center space-x-6 mb-4 ">
          <div
            className="flex flex-col"
            style={{ width: "292px", height: "444px" }}
          >
            <p className="font-bold">SHOP</p>
            <p>Sofas</p>
            <p>Living</p>
            <p>Dining</p>
            <p>Workspace</p>
            <p>Bedroom</p>
            <p>Lighting</p>
            <p>Rugs</p>
            <p>Decor</p>
          </div>
          <div
            className="flex flex-col"
            style={{ width: "292px", height: "444px" }}
          >
            <p className="font-bold">COMPANY</p>
            <p>Reviews</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div
            className="flex flex-col"
            style={{ width: "292px", height: "444px" }}
          >
            <p className="font-bold">ACCOUNT</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Order Status</p>
          </div>
          <div
            className="flex flex-col"
            style={{ width: "292px", height: "444px" }}
          >
            <p className="font-bold">HELP</p>
            <p>FAQ</p>
            <p>Return Policy</p>
            <p>Product Care</p>
            <p>Poly & Bark Trade</p>
            <p>Financing</p>
            <p>Contact Us</p>
            <p>Sitemap</p>
          </div>
          <div
            className="flex flex-col"
            style={{ width: "292px", height: "444px" }}
          >
            <p className="font-bold">ACCESSIBILITY</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/2 flex flex-col items-center">
            <p>© 2023, Poly & Bark</p>
            <p>All Rights Reserved. Terms & Privacy</p>
          </div>
          <ul className=" w-1/2 flex justify-center space-x-4 ">
            <li className="w-8">
              <img src="\src\assets\facebook.png" alt="Fb" />
            </li>
            <li className="w-8">
              <img src="\src\assets\gorjeo.png" alt="Tw" />
            </li>
            <li className="w-8">
              <img src="\src\assets\pinterest.png" alt="Pt" />
            </li>
            <li className="w-8">
              <img src="\src\assets\logotipo-de-instagram.png" alt="Ig" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
