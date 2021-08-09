import React from "react";
import autismoImage from "../../img/img5.jpeg";
import "../../App.css";

const Autismo = () => {
  return (
    <>
      <div className="autismo-container">
        <h1 className="autismo-title">Autismo</h1>
        <img className="autismo-image" src={autismoImage} alt="Autismo" />
      </div>
    </>
  );
};

export default Autismo;
