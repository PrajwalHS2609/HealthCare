import React from "react";
import "./AppointmentTreatment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
const AppointmentTreatmentCard = () => {
  return (
    <div className="AppointmentTreatmentCard">
      <div className="AppointmentTreatmentCardContent1">
        <div className="AppointmentTreatmentCardItem1">
          <FontAwesomeIcon
            icon={faShield}
            className="AppointmentTreatmentCardIcon"
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="AppointmentTreatmentCardContent2">
        <h3>100% Safe & Trusted </h3>
        <p>
          Ority have suffered alteration in some randomised words which don't
          look even slightly believable.
        </p>
      </div>
    </div>
  );
};

export default AppointmentTreatmentCard;
