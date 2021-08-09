import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/img3.jpeg";
import img2 from "../img/img5.jpeg";
import img3 from "../img/img6.jpeg";
import img4 from "../img/img2.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselItem = () => {
  return (
    <Carousel className="carousel" variant="dark" fade>
      <Carousel.Item>
        <img className="carousel-img" src={img1} alt="First slide" />
        <Carousel.Caption>{/* <h5>Titulo de imagen</h5> */}</Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-img" src={img2} alt="Second slide" />
        {/* <Carousel.Caption>
          <h5>Titulo de imagen</h5>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-img" src={img3} alt="Third slide" />
        {/* <Carousel.Caption>
          <h5>Titulo de imagen</h5>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src={img4} alt="Third slide" />
        {/* <Carousel.Caption>
          <h5>Titulo de imagen</h5>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselItem;
