import React from "react";
import Navbar from "./components/Navbar"; // Ruta correcta para Navbar.js
import Main from "./components/Main"; // Ruta correcta para Main.js
import Footer from "./components/Footer"; // Ruta correcta para Footer.js
import "./App.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
