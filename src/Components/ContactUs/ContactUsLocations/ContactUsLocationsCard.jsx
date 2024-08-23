import React from "react";
import "./ContactUsLocations.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const ContactUsLocationsCard = () => {
  return (
    <div className="contactUsLocationsCard">
      <div className="contactUsLocationsCardIcon">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="contactUsLocationIcon"
        ></FontAwesomeIcon>
      </div>
      <div className="contactUsLocationsCardContent1">
        <h2>Bangalore</h2>
      </div>
      <div className="contactUsLocationsCardContent2">
        <div className="contactUsLocationsCardItem">
          <p>
            {" "}
            <FontAwesomeIcon
              icon={faLocationDot}
              className="contactUsLocationItemIcon"
            ></FontAwesomeIcon>{" "}
            123, 4th Main Road, 2nd Cross, HSR Layout, Sector 7, Bangalore
          </p>
        </div>
        <div className="contactUsLocationsCardItem">
          <p>
            {" "}
            <FontAwesomeIcon
              icon={faEnvelope}
              className="contactUsLocationItemIcon"
            ></FontAwesomeIcon>{" "}
            <a href="mail:themeht23@gmail.com">themeht23@gmail.com</a>
          </p>
        </div>
        <div className="contactUsLocationsCardItem">
          <p>
            {" "}
            <FontAwesomeIcon
              icon={faPhone}
              className="contactUsLocationItemIcon"
            ></FontAwesomeIcon>{" "}
            <a href="tel:+91-234-567-8900">+91-234-567-8900</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsLocationsCard;
