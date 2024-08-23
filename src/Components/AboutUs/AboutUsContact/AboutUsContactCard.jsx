import React from "react";
import "./AboutUsContact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
const AboutUsContactCard = () => {
  return (
    <div className="aboutUsContactCard">
      <div className="aboutUsContactCardIcon">
        <FontAwesomeIcon
          icon={faCalendar}
          className="aboutUsContactIcon"
        ></FontAwesomeIcon>
      </div>
      <div className="aboutUsContactCardContent1">
        <h2>Opening Hours</h2>
      </div>
      <div className="aboutUsContactCardContent2">
        <div className="aboutUsContactCardItem">
          <li>
            <span>Mon - Tues</span>
            <span>09:00AM - 06:00PM</span>
          </li>
          <li>
            <span>Wed - Thu</span>
            <span>09:00AM - 06:00PM</span>
          </li>
          <li>
            <span>Fri - Sat</span>
            <span>09:00AM - 06:00PM</span>
          </li>
          <li>
            <span>Emergency</span>
            <span>24/7 Hours 7 Days</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContactCard;
