import React from "react";
import imagenTravel from "../img/img3.jpeg";
import imagenTravels from "../img/travel.jpg";
import "./WorkSection.css";

const Travels = () => {
  return (
    <>
      <div className="work-container">
        <div className="work-title-content">
          <img src={imagenTravel} alt="imagen viajes" className="work-img" />
          <div className="travel-title-content">
            <h2 className="travel-title"> Actividades especiales </h2>
          </div>
        </div>

        <div className="work-content">
          <p>
            Como cualquier actividad deportiva en grupo, las acciones de los
            proyectos se complementan con juntadas, salidas y encuentros
            <br />
            siempre en grupo. Ademas de festejos de cumpleaños, campamentos,
            entrega de premios y el infaltable viaje familiar de fin de año.
          </p>
        </div>
      </div>

      <div className="work-container">
        <div className="work-title-content">
          <img src={imagenTravels} alt="imagen viajes" className="work-img" />
          <h2 className="work-title second"> Viajes </h2>
        </div>

        <div className="work-content">
          <p>
            Año tras año, cerramos nuestras acciones con un viaje en familia.
            Desde las sierras hasta Brasil y desde viajes en auto hasta avion,
            <br />
            año tras año esperamos con ansias esta fecha.
          </p>
        </div>

        <div className="travels-content">
          <div className="travels-content-container">
            <p> 2014 Santa Maria de Punilla </p>
            <p> 2015 Buenos Aires </p>
            <p> 2016 Buenos Aires </p>
            <p> 2017 Embalse </p>
            <p> 2018 Mendoza (en avion) </p>
            <p> 2019 Garopaba - Brasil </p>
            <p> 2020 Cura Brochero </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Travels;
