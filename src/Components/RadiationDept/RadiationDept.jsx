import React from "react";
import ContactUsHeader from "../ContactUs/ContactUsHeader";
import "./RadiationDept.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import RadiationDeptContent from "./RadiationDeptContent/RadiationDeptContent";
import RadiationDeptHow from "./RadiationDeptHow/RadiationDeptHow";
import WeProvide from "../HomePage/WeProvide/WeProvide";
import RadiationDeptFaq from "./RadiationDeptFaq/RadiationDeptFaq";
const RadiationDept = () => {
  return (
    <div className="radiationDept">
      <ContactUsHeader
        head="Radiation Therapy"
        img="https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
      />
      <div className="radiationDeptContent">
        <div className="radiationDeptItem1">
          <RadiationDeptContent />
          <RadiationDeptHow />
          <WeProvide />
          <RadiationDeptFaq />
        </div>
        <div className="radiationDeptItem2">
          <div className="sideNav">
            <h3>Our Service</h3>
            <NavLink to={"/radiation-therapy"}>
              <li className="navLi1">
                Radiation Therapy{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="sideNavArrow"
                ></FontAwesomeIcon>
              </li>
            </NavLink>

            <NavLink to={"/"}>
              <li className="navLi2">
                Orthopedics{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="sideNavArrow"
                ></FontAwesomeIcon>
              </li>
            </NavLink>

            <Link to={"/"}>
              {" "}
              <li className="navLi3">
                Gynecologist{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="sideNavArrow"
                ></FontAwesomeIcon>
              </li>
            </Link>

            <Link to={"/"}>
              {" "}
              <li className="navLi4">
                Cardiologist{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="sideNavArrow"
                ></FontAwesomeIcon>
              </li>
            </Link>

            <Link to={"/"}>
              {" "}
              <li className="navLi5">
                Neurology{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="sideNavArrow"
                ></FontAwesomeIcon>
              </li>
            </Link>

            <Link to={"/"}>
              <li className="navLi6">
                Pediatrics{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="sideNavArrow"
                ></FontAwesomeIcon>
              </li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadiationDept;
