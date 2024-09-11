import React from "react";
import "./Header2Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import docNurse1 from "./../../../Imgs/Doc&nurse1.png";
import docNurse2 from "./../../../Imgs/doc.png";
import Header2CarouselContent from "./Header2CarouselContent";
const Header2Carousel = () => {
  return (
    <div className="header2Carousel">
      <Carousel fade className="carousel2Container">
        <Carousel.Item className="carouselItem" interval={10000}>
          <div className="carouselItemCover">
            <Header2CarouselContent
              head="Best Medical Experience"
              para=" At Doctean hospital, we believe that healthcare should be more than
          just a service. It should be a compassionate and collaborative journey
          towards wellness."
              link="/"
            />
          </div>
          <img src={docNurse1} alt="header1" />
        </Carousel.Item>
        <Carousel.Item className="carouselItem" interval={3000}>
          <div className="carouselItemCover">
            <Header2CarouselContent
              head="Best Medical Experience"
              para=" At Doctean hospital, we believe that healthcare should be more than
          just a service. It should be a compassionate and collaborative journey
          towards wellness."
              link="/"
            />
          </div>

          <img src={docNurse2} alt="" />
        </Carousel.Item>
        <Carousel.Item className="carouselItem" interval={3000}>
          <div className="carouselItemCover">
            <Header2CarouselContent
              head="Best Medical Experience"
              para=" At Doctean hospital, we believe that healthcare should be more than
          just a service. It should be a compassionate and collaborative journey
          towards wellness."
              link="/"
            />
          </div>

          <img src={docNurse1} alt="" />
        </Carousel.Item>
        <Carousel.Item className="carouselItem" interval={3000}>
          <div className="carouselItemCover">
            <Header2CarouselContent
              head="Best Medical Experience"
              para=" At Doctean hospital, we believe that healthcare should be more than
          just a service. It should be a compassionate and collaborative journey
          towards wellness."
              link="/"
            />
          </div>

          <img src={docNurse2} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header2Carousel;
