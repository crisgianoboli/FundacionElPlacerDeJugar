import React from "react";
import "./Ubication.css";
import LogoLP from "../img/Logo Las palmas.png";
import Map from "./Map";

const Ubication = () => {
  return (
    <div className="ubication-content">
      <div className="logo-content">
        <img className="logo-lp" src={LogoLP} alt="Logo las palmas" />
      </div>

      <Map />
    </div>
  );
};

export default Ubication;
