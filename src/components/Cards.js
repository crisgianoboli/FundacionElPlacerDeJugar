import React from "react";
import "./Cards.css";
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

function Cards() {
  return (
    <>
      <div className="cards">
        <Card border="info" style={{ width: "20rem" }}>
          <Card.Img 
          className="cards-img"
          src={img1} />
          <Card.ImgOverlay
          className="cards-overlay"
          >
            {/* <Card.Title>Titutlo o texto para cards</Card.Title> */}
            <Link to='/Autismo'>
            <Button variant="primary"  className="btn-card" >Autismo</Button>
            </Link>
          </Card.ImgOverlay>
        </Card>

        <Card border="info" style={{ width: "20rem" }}>
          <Card.Img 
          className="cards-img" 
          src={img2} />
          <Card.ImgOverlay
          className="cards-overlay"
          >
            <Link to='/Work'>
            <Button 
            variant="success" className="btn-card">Fundacion</Button>
            </Link>
          </Card.ImgOverlay>
        </Card>

        <Card border="info" style={{ width: "20rem" }}>
          <Card.Img 
          className="cards-img"
          src={img3} />
          <Card.ImgOverlay
          className="cards-overlay"
          >
            <Link to='/About'>
            <Button variant="warning" className="btn-card">Equipo</Button>
            </Link>
          </Card.ImgOverlay>
        </Card>
      </div>{" "}
    </>
  );
}

export default Cards;
