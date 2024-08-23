import React from "react";
import "./MedicalService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const MedicalServiceCard = () => {
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
        <img
          src="https://doctean.themeht.com/wp-content/uploads/2024/03/09-700x600.jpg"
          alt=""
        />
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

export default MedicalServiceCard;
