import React from "react";
import CarouselItem from "./CarouselItem";
import "./HeroSection.css";
import TextAnimation from "react-animate-text";

function HeroSection() {
  return (
    <div className="hero-container">
      <CarouselItem />

      <div className="hero-title-content">
        <TextAnimation>
          <h1>El Placer de Jugar</h1>
        </TextAnimation>
        <p>
          12 AÑOS COLABORANDO CON LA SOCIABILIZACION DE JOVENES
          <br />Y NIÑOS CON AUTISMO A TRAVES DE JUEGOS EN GRUPO Y EL DEPORTE
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
