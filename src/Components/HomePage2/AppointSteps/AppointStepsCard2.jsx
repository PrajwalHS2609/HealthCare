import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
const AppointStepsCard2 = () => {
  return (
    <div className="appointStepsCard2">
      <div className="appointStepsCardContent1">
        <img
          src="https://doctean.themeht.com/wp-content/uploads/2024/03/16.jpg"
          alt=""
        />
      </div>
      <div className="appointStepsCardContent2">
        <div className="appointStepsCardContent2Img">
          <FontAwesomeIcon
            icon={faStethoscope}
            className="docIcon"
          ></FontAwesomeIcon>{" "}
        </div>
        <h3>Medical Checkup</h3>
        <p>
          Professionally impact distributed data via value-added experiences.
          Proacti incentivize 24/365 applications whereas turnkey total linkage.
          whiteboard multifunctional channels with interoperable value.
        </p>
        <button>GET IN TOUCH</button>
      </div>
      <div className="appointStepsCard2Content3">
        <h2>02</h2>
      </div>
    </div>
  );
};

export default AppointStepsCard2;
