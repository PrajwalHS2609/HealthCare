import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const AboutUsContactCard3 = () => {
  return (
    <div className="aboutUsContactCard" id="aboutUsContactCard3">
      <div className="aboutUsContactCardIcon">
        <FontAwesomeIcon
          icon={faCalendarPlus}
          className="aboutUsContactIcon"
        ></FontAwesomeIcon>
      </div>
      <div className="aboutUsContactCardContent1" id="aboutUsContactCard3Content1">
        <h2>Doctors Timetable</h2>
      </div>
      <div className="aboutUsContactCardContent2">
        <div className="aboutUsContactCardItem" id="aboutUsContactCard3Item">
          <p>
            Doctean provides patients with safe effective services. Qualified
            doctors available six days a week, view our timetable to make an
            appointment. 24×7 Available For Booking
          </p>
        </div>
        <div className="aboutUsContactCardItem">
          <p>
           <Link to={"/"}><button>View TimeTable</button></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContactCard3;
