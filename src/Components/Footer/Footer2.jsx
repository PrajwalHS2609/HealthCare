import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Footer2 = () => {
  return (
    <div className="footer2">
      <div className="footer2Content">
        <div className="footer2Item1">
          <div className="footer2Address1">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="footer2AddIcon"
            ></FontAwesomeIcon>
          </div>
          <div className="footer2Address2">
            <h6>MEDICAL ADDRESS</h6>
            <p>Bangalore, Karanataka</p>
          </div>
        </div>
        <div className="footer2Item2">
          <div className="footer2Address1">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="footer2AddIcon"
            ></FontAwesomeIcon>
          </div>
          <div className="footer2Address2">
            <h6>EMAIL ADDRESS</h6>
            <p>
              <a href="mail:">healthcare@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="footer2Item3">
          <div className="footer2Address1">
            <FontAwesomeIcon
              icon={faPhone}
              className="footer2AddIcon"
            ></FontAwesomeIcon>
          </div>
          <div className="footer2Address2">
            <h6>EMERGENCY LINE</h6>
            <p>+91 1234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
