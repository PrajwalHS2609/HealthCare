import React from "react";
import "./Home2AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Home2AboutUsContent = () => {
  return (
    <div className="home2AboutUsContentWrap">
      <div className="home2AboutUsContentWrapHead">
        <h6>ABOUT OUR MEDICAL</h6>
        <h2>Your Journey to Better Health Starts Here</h2>
      </div>
      <div className="home2AboutUsContentWrapPara">
        <p>
          {" "}
          Abrief statement outlining the purpose and mission of the clinic. This
          can include the commitment to patient care, community health, and any
          specifical goals for our values. Our team of dedicated healthcare
          professionals combines years of experience with a genuine commitment
          to providing.
        </p>
      </div>
      <div className="home2AboutUsContentWrapList">
        <ul>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faPlus}
              className="abtus2Icon"
            ></FontAwesomeIcon>{" "}
            Medical Professionals
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faPlus}
              className="abtus2Icon"
            ></FontAwesomeIcon>{" "}
            Emergency Care
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faPlus}
              className="abtus2Icon"
            ></FontAwesomeIcon>{" "}
            Choose a Qualified
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faPlus}
              className="abtus2Icon"
            ></FontAwesomeIcon>{" "}
            Clinic Management Systems
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faPlus}
              className="abtus2Icon"
            ></FontAwesomeIcon>{" "}
            Facilities and Equipment
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faPlus}
              className="abtus2Icon"
            ></FontAwesomeIcon>{" "}
            Services Offered
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faPlus}
              className="abtus2Icon"
            ></FontAwesomeIcon>{" "}
            Medical Consulting
          </li>
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faPlus}
              className="abtus2Icon"
            ></FontAwesomeIcon>{" "}
            Specializations
          </li>
        </ul>{" "}
      </div>
      <div className="home2AboutUsContentWrapBtn">
        <button>LEARN MORE</button>
      </div>
    </div>
  );
};

export default Home2AboutUsContent;
