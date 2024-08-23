import React from "react";
import "./UpperNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const UpperNav = () => {
  return (
    <div className="upperNavContainer">
      <li>
        {" "}
        <FontAwesomeIcon
          icon={faClock}
          className="upperNavClock"
        ></FontAwesomeIcon>
        Monday <span>-</span> Friday 10:00 to 6:00
      </li>
      <li>
        {" "}
        <FontAwesomeIcon
          icon={faLocationDot}
          className="upperNavClock"
        ></FontAwesomeIcon>
        Bangalore<span>,</span>Karanataka
      </li>
      <li></li>
    </div>
  );
};

export default UpperNav;
