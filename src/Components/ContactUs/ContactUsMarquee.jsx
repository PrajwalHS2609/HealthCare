import React from "react";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
const ContactUsMarquee = () => {
  return (
    <div className="medicalMarquee">
      <Marquee loop={0}>
        <div className="medicalMarqueeContent">
          <h2>Call Us</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Email Us</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Chat with Us</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Help Center</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Office Address</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Location</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Contact Form</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Business Hours</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Find Us</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Phone Number</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
          <h2>Business Hours</h2>
          <FontAwesomeIcon
            icon={faStethoscope}
            className="marqueeIcon"
          ></FontAwesomeIcon>
        </div>
      </Marquee>
    </div>
  );
};

export default ContactUsMarquee;
