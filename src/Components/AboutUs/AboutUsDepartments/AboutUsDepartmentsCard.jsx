import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const AboutUsDepartmentsCard = () => {
  return (
    <div className="medicalServiceCard">
      <Link to={"/"}></Link>
      <div className="medicalServiceCardLogo">
        <FontAwesomeIcon
          icon={faBrain}
          className="medicalServiceIcon"
        ></FontAwesomeIcon>
      </div>
      <div className="medicalServiceCardImg">
        <p>
          Radiation therapy can be given inside or outside of your body. The
          most common kind is external beam radiation therapy. This treatment
          uses a large machine called a linear accelerator. High-energy beams
          are aimed from the machine to a precise point on your body. Modern
          methods of radiation are precise. They aim beams directly at […]
        </p>
      </div>
      <div className="medicalServiceCardContent">
        <h4>BRAIN</h4>
        <h3>Neurology</h3>
      </div>
      <div className="medicalServiceCardArrow">
        <FontAwesomeIcon
          icon={faArrowRight}
          className="medicalServiceArrowIcon"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default AboutUsDepartmentsCard;
