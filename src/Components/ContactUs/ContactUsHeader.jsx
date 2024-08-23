import React from "react";
import "./ContactUs.css";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
const ContactUsHeader = (props) => {
  return (
    <div className="contactUsHeader">
        <div className="contactUsImgContainer">
      <img
        src={props.img}
        alt="contactUsImg"
      />
      <div className="contactUsHeaderCover">
        <div className="contactUsHeading">
          <h2>{props.head}</h2>
          <BreadCrumb/>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ContactUsHeader;
