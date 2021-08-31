import React from "react";
import "./Cards.css";
import Card from "react-bootstrap/Card";
import img2 from "../img/img2.jpeg";

function CardsWorks() {
  return (
    <>
      <div className="cards-work">
        <Card border="info" style={{ width: "20rem", height: "250px" }}>
          <h3 className="card-title">Actividades Semanales </h3>
          <Card.Text className="card-text">
            A traves de diversas acciones los jovenes y niños se vincuylan y
            relacionan, siempre jugando; ya sea en la pileta climatizada (con
            juego y aprendizajes de natacion), actividades deportivas y juegos,
            musicoterapia y complementando siempre con alguna salida o actividad
            especial.
          </Card.Text>
        </Card>

        <Card border="info" style={{ width: "20rem", height: "250px" }}>
          <Card.Img className="cards-img" src={img2} />
        </Card>

        <Card border="info" style={{ width: "20rem", height: "250px" }}>
          <h3 className="card-title">Horarios </h3>
          <Card.Text className="card-text">
            Natacion: Jueves de 10 a 11 hs y Martes y jueves de 16 a 17 hs.{" "}
            <br />
            Musicoterapia: Miercoles de 18 a 19 hs. <br />
            Juegos deportivos: Jueves de 19 a 20 hs. <br />
            Juegos en pileta y gimnasio: Sabado de 10 a 13 hs.
          </Card.Text>
        </Card>
      </div>{" "}
    </>
  );
}

export default CardsWorks;
