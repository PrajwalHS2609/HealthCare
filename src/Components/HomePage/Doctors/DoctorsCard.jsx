import React from "react";
import "./Doctors.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const DoctorsCard = () => {
  return (
    <div className="doctorsCard">
      <div className="doctorsCardIcon">
        <FontAwesomeIcon
          icon={faShareNodes}
          className="doctorsShare"
        ></FontAwesomeIcon>
      </div>
      <img
        src="https://img.freepik.com/free-photo/young-doctor-getting-ready-work_23-2149393691.jpg?t=st=1723702676~exp=1723706276~hmac=61c35bcbc3714e1219e3287dc3311bafe966f8e0b895fcc59d283f838ff2a1d5&w=360"
        alt=""
      />
      <div className="doctorsCardCover">
        <div className="doctorsCardSocial">
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="doctorsSocial"
            ></FontAwesomeIcon>
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faXTwitter}
              className="doctorsSocial"
            ></FontAwesomeIcon>
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="doctorsSocial"
            ></FontAwesomeIcon>
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faXTwitter}
              className="doctorsSocial"
            ></FontAwesomeIcon>
          </li>
        </div>
        <div className="doctorName">
          <h3>Dr.Blanco Smith</h3>
          <h6>SURGEON</h6>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
