import React from "react";
import "./Testimonials.css";
import TestimonialsSlide from "./TestimonialsSlide";
import doubleQuotes from "./../../../Imgs/double-quotes.png";
import TestimonialHead from "./TestimonialHead";
import TestimonialFooter from "./TestimonialFooter";
const Testimonials = () => {
  return (
    <div className="TestimonialsContainer">
      <div className="testimonialHeadContainer">
        <TestimonialHead />
      </div>
      <div className="testimonialWrapper">
        {" "}
        <div className="TestimonialsContent" id="TestimonialsContent1">
          <img
            src="https://doctean.themeht.com/wp-content/uploads/2024/03/11-700x600.jpg"
            alt=""
          />
        </div>
        <div className="TestimonialsContent" id="TestimonialsContent2">
          <TestimonialsSlide />
          <div className="TestimonialsContentQuote">
            <img src={doubleQuotes} alt="doubleQuotes" />
          </div>
        </div>
      </div>
      <TestimonialFooter/>
    </div>
  );
};

export default Testimonials;
