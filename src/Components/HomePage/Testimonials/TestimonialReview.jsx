import React from "react";
import "./Testimonials.css";
import stars from "./../../../Imgs/stars.png";

const TestimonialReview = (props) => {
  return (
    <div className="testimonialReview">
      <img src={stars} alt="stars" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod,
        temporibus animi vero autem saepe, fugiat eligendi corporis ad at sunt
        iusto deleniti repellendus quia blanditiis tenetur dignissimos eum
        molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nihil quod, temporibus animi vero autem saepe, fugiat eligendi corporis
        ad at sunt iusto deleni
      </p>
      <h3>-{props.name}</h3>
    </div>
  );
};

export default TestimonialReview;
