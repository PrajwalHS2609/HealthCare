import React from "react";
import "./MedicalService2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRadiation,faArrowRight} from "@fortawesome/free-solid-svg-icons";

const MedicalService2Card = () => {
  return (
    <div className="medicalService2Card">
      <h6>CANCER</h6>
      <h3>Radiation Therapy</h3>
      <p>
        Radiation therapy can be given inside or outside of your body. The most
        common kind is external beam radiation therapy. This treatment uses a
        large machine called a linear accelerator.
      </p>
      <div className="medicalServiceIcon">
        {" "}
        <FontAwesomeIcon
          icon={faCircleRadiation}
          className="radIcon"
        ></FontAwesomeIcon>{" "}
      </div>
      <div className="medicalServiceIcon2" >
        {" "}
        <FontAwesomeIcon
          icon={faArrowRight}
          className="arrIcon"
        ></FontAwesomeIcon>{" "}
      </div>
    </div>
  );
};

export default MedicalService2Card;
