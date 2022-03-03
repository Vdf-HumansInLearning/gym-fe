import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={3000} className="carousel__image">
        <img
          className="d-block w-100"
          src="../../Images/home_slide1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Button variant="outline-danger">Join us!</Button>
          <p className="home__paragraph">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={3000} className="carousel__image">
        <img
          className="d-block w-100"
          src="../../Images/slide4.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <Button variant="outline-warning">Second slide label</Button>
          <p className="home__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} className="carousel__image">
        <img
          className="d-block w-100"
          src="../../Images/slide6.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <Button variant="outline-info">Third slide label</Button>
          <p className="home__paragraph">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
