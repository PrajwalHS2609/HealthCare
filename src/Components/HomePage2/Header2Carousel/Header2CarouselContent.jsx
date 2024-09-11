import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header2CarouselContent = (props) => {
  return (
    <div className="header2CarouselContent">
      {/* <div className="header2CarouselContent1">Welcome to Our Hospital</div> */}
      <div className="header2CarouselContent2">
        <h2>{props.head}</h2>
      </div>
      <div className="header2CarouselContent3">
        <p>{props.para}</p>
        <Link to={props.link}> </Link>
      </div>
      <div className="header2CarouselContent4">
        <button id="header2CarouselBtn1">
          EXPLORE NOW{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="carousel2ArrowIcon"
          ></FontAwesomeIcon>
        </button>
        <button id="header2CarouselBtn2">
          FREE CONSULTATION{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="carousel2ArrowIcon"
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Header2CarouselContent;
