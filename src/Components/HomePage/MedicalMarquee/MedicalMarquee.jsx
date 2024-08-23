import React from "react";
import "./MedicalMarquee.css";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
const MedicalMarquee = () => {
  return (
    <div className="medicalMarquee">
      <Marquee loop={0}>
        <div className="medicalMarqueeContent">
          <h2>Doctor</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Dental</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Radiologist</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>ECG</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>X-Ray</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>MRI</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Diagnostic</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Emergency Room</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Outpatient Care</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Pharmacy</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Patient Safety</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
        </div>
      </Marquee>
    </div>
  );
};

export default MedicalMarquee;
