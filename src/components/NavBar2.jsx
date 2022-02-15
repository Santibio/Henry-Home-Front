import React from "react";
import "../assets/css/NavBar2/NavBar2.scss";

const NavBar2 = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <h2>
          Henry <span>Home</span>
        </h2>
      </div>
      <div className="btn-container">
        <a href="#registro">
          <button className="btn-registro">Registro</button>
        </a>
        <a href="#registro">
          <button className="btn-ingreso">Ingreso</button>
        </a>
      </div>
    </div>
  );
};

export default NavBar2;