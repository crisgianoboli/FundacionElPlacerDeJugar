import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import autismo from "../img/autismo.jpg";
import fundacion from "../img/img1.jpeg";
import equipo from "../img/equipo.JPG";

function Cards() {
  return (
    <>
      <div className="cards">
        <Card border="info" style={{ width: "20rem" }}>
          <Card.Img className="cards-img" src={autismo} />
          <Card.ImgOverlay className="cards-overlay">
            {/* <Card.Title>Titutlo o texto para cards</Card.Title> */}
            <Link to="/Autismo">
              <Button
                variant="primary"
                className="btn-card"
                style={{ fontSize: "25px" }}
              >
                Autismo
              </Button>
            </Link>
          </Card.ImgOverlay>
        </Card>

        <Card border="info" style={{ width: "20rem" }}>
          <Card.Img className="cards-img" src={fundacion} />
          <Card.ImgOverlay className="cards-overlay">
            <Link to="/Work">
              <Button
                variant="success"
                className="btn-card"
                style={{ fontSize: "25px" }}
              >
                Fundacion
              </Button>
            </Link>
          </Card.ImgOverlay>
        </Card>

        <Card border="info" style={{ width: "20rem" }}>
          <Card.Img className="cards-img" src={equipo} />
          <Card.ImgOverlay className="cards-overlay">
            <Link to="/About">
              <Button
                variant="warning"
                className="btn-card"
                style={{ fontSize: "25px" }}
              >
                Equipo
              </Button>
            </Link>
          </Card.ImgOverlay>
        </Card>
      </div>{" "}
    </>
  );
}

export default Cards;
