import React from "react";
import Carousel from "react-bootstrap/Carousel";
import TestimonialReview from "./TestimonialReview";
import "./Testimonials.css";
const TestimonialsSlide = () => {
  return (
    <div className="testimonialsMain">
      <Carousel fade className="testimonialsCarouselContainer">
        <Carousel.Item className="testimonialsCarouselItem" interval={3000}>
          <div className="testimonialsMainContent">
            <TestimonialReview name="Doc 1"/>
          </div>
        </Carousel.Item>
        <Carousel.Item className="testimonialsCarouselItem" interval={3000}>
          <div className="testimonialsMainContent">
            <TestimonialReview name="Doc 2"/>
          </div>
        </Carousel.Item>
        <Carousel.Item className="testimonialsCarouselItem" interval={3000}>
          <div className="testimonialsMainContent">
            <TestimonialReview name="Doc 3"/>
          </div>
        </Carousel.Item>
        <Carousel.Item className="testimonialsCarouselItem" interval={3000}>
          <div className="testimonialsMainContent">
            <TestimonialReview name="Doc 4"/>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TestimonialsSlide;
