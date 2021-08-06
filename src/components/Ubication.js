import React from "react";
import "./Ubication.css";
import LogoLP from "../img/Logo Las palmas.png";
import Map from "./Map";
/*import Credentials from "./Credentials"; */

const Ubication = () => {
  /* const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`; */

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
