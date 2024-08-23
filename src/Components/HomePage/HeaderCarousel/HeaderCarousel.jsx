import React from "react";
import "./HeaderCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import docNurse1 from "./../../../Imgs/Doc&nurse1.png";
import docNurse2 from "./../../../Imgs/doc.png";
import HeaderCarouselContent from "./HeaderCarouselContent";
const HeaderCarousel = () => {
  return (
    <div className="headerCarousel">
      <Carousel fade className="carouselContainer">
        <Carousel.Item className="carouselItem" interval={3000}>
          <div className="carouselItemCover">
            <HeaderCarouselContent
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
            <HeaderCarouselContent
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
            <HeaderCarouselContent
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
            <HeaderCarouselContent
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

export default HeaderCarousel;
