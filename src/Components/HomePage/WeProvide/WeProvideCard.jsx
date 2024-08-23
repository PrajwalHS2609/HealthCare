import React from "react";
import "./WeProvide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
const WeProvideCard = () => {
  return (
    <div className="weProvideCard">
      <div className="weProvideCardIcon">
        <h4>01</h4>
      </div>
      <div className="weProvideCardContent1">
        <h2>HealthCheckUp</h2>
      </div>
      <div className="weProvideCardContent2">
        <div className="weProvideCardItem1">
          <p>We providing quality healthcare services to our community</p>
        </div>
        <div className="weProvideCardItem2">
          <FontAwesomeIcon
            icon={faStethoscope}
            className="weProvideIcon"
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default WeProvideCard;
