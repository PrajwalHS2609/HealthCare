import React from "react";
import "./AboutUsContact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const AboutUsContactCard2 = () => {
  return (
    <div className="aboutUsContactCard" id="aboutUsContactCard2">
      <div className="aboutUsContactCardIcon">
        <FontAwesomeIcon
          icon={faPhone}
          className="aboutUsContactIcon"
        ></FontAwesomeIcon>
      </div>
      <div className="aboutUsContactCardContent1">
        <h2>Emergency Cases</h2>
      </div>
      <div className="aboutUsContactCardContent2">
        <div className="aboutUsContactCardItem">
          <p>
            Please feel free to contact our friendly reception staff with any
            medical enquiry. including general check-ups or assisting you with
            injuries.
          </p>
        </div>
        <div className="aboutUsContactCardItem">
          <p>
            <a href="tel:+91-234-567-8900">+91-234-567-8900</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContactCard2;
