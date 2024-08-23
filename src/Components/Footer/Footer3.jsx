import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Footer3 = () => {
  return (
    <div className="Footer3">
      <div className="Footer3Content">
        <h3>Copyright © 2024 All Rights Reserved | Health Care</h3>
      </div>
      <div className="Footer3Content">
        <li>
          {" "}
          <a href="*">
            {" "}
            <FontAwesomeIcon
              icon={faLinkedin}
              className="footer3Social"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          {" "}
          <a href="*">
            {" "}
            <FontAwesomeIcon
              icon={faInstagram}
              className="footer3Social"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          {" "}
          <a href="*">
            {" "}
            <FontAwesomeIcon
              icon={faXTwitter}
              className="footer3Social"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          {" "}
          <a href="*">
            {" "}
            <FontAwesomeIcon
              icon={faFacebook}
              className="footer3Social"
            ></FontAwesomeIcon>
          </a>
        </li>
      </div>
    </div>
  );
};

export default Footer3;
