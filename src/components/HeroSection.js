import React from "react";
import CarouselItem from "./CarouselItem";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* Ver si poner titulo o no */}
      {/* <h1>El Placer de Jugar</h1>  */}

      <CarouselItem />

      <div className="hero-title-content">
        <h2>El Placer de Jugar</h2>
        <p>
          12 AÑOS COLABORANDO CON LA SOCIABILIZACION DE JOVENES
          <br />Y NIÑOS CON AUTISMO A TRAVES DE JUEGOS EN GRUPO Y EL DEPORTE
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
