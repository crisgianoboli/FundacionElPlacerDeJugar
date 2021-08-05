import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

function CardsWorks() {
  return (
    <>
      <div className="cards">
        <Card border="info" style={{ width: "20rem" }}>
          {/* <Card.Img className="cards-img" src={img1} /> */}
          <Card.Title>Actividades Semanales </Card.Title>
          <Card.ImgOverlay className="cards-overlay"></Card.ImgOverlay>
        </Card>

        <Card border="info" style={{ width: "20rem" }}>
          <Card.Img className="cards-img" src={img2} />
        </Card>

        <Card border="info" style={{ width: "20rem" }}>
          {/* <Card.Img className="cards-img" src={img3} /> */}
          <Card.Title>Horarios </Card.Title>
          <Card.ImgOverlay className="cards-overlay"></Card.ImgOverlay>
        </Card>
      </div>{" "}
    </>
  );
}

export default CardsWorks;
