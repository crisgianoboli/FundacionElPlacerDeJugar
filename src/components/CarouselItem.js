import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const CarouselItem = () => {
  return (
    <Carousel 
    className="carousel"
    variant="dark" 
    fade>

      <Carousel.Item>
        <img
          className="carousel-img"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Titulo de imagen</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel-img"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5>Titulo de imagen</h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel-img"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h5>Titulo de imagen</h5>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default CarouselItem;
