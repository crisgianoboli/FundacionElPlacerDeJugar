import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

/* Imagenes carousel */

/* import banner1 from "../img/banner1.jpg"; */
import banner2 from "../img/banner2.jpg";
import banner3 from "../img/banner3.JPG";
import banner4 from "../img/banner4.jpg";
import banner5 from "../img/banner5.jpg";
import banner6 from "../img/banner6.jpg";

const CarouselItem = () => {
  return (
    <Carousel className="carousel" variant="dark" fade>
      <Carousel.Item>
        <img className="carousel-img" src={banner2} alt="Second slide" />
        {/* <Carousel.Caption>
          <h5>Titulo de imagen</h5>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-img" src={banner3} alt="Third slide" />
        {/* <Carousel.Caption>
          <h5>Titulo de imagen</h5>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src={banner4} alt="Third slide" />
        {/* <Carousel.Caption>
          <h5>Titulo de imagen</h5>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src={banner5} alt="Third slide" />
        {/* <Carousel.Caption>
          <h5>Titulo de imagen</h5>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src={banner6} alt="Third slide" />
        {/* <Carousel.Caption>
          <h5>Titulo de imagen</h5>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselItem;
