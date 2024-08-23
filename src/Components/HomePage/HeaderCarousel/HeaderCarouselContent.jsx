import React from "react";
import "./HeaderCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const HeaderCarouselContent = (props) => {
  return (
    <div className="headerCarouselContent">
      <div className="headerCarouselContent1">Welcome to Our Hospital</div>
      <div className="headerCarouselContent2">
        <h2>
          {props.head}
        </h2>
      </div>
      <div className="headerCarouselContent3">
        <p>
         {props.para}
        </p>
        <Link to={props.link}>
          {" "}
          <div className="carouselArrow">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="carouselArrowIcon"
            ></FontAwesomeIcon>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderCarouselContent;
