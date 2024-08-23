import React from "react";
import "./AppointmentForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AppointmentFormMain = () => {
  return (
    <div className="appointmentFormMain">
      <div className="appointmentFormLogo">
        <FontAwesomeIcon
          icon={faCalendar}
          className="appointmentFormMainIcon"
        ></FontAwesomeIcon>
      </div>
      <form action="">
        <fieldset>
          <div className="firstLane">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="secondLane">
            <select name="" id="">
              <option value="">Select Department</option>
              <option value="">Radiation Therapy</option>
              <option value="">Orthopedics</option>
              <option value="">Dental Care</option>
              <option value="">Pediatrics</option>
            </select>
            <select name="" id="">
              <option value="">Select Doctor</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            {/* <input type="text" placeholder="Select Department" /> */}
            {/* <input type="text" placeholder="Select Doctor" /> */}
          </div>
          <div className="thirdLane">
            <input type="number" placeholder="Phone" />
            <input type="date" placeholder="" />
            <input type="time" placeholder="" />
          </div>
          <div className="fourthLane">
            <textarea
              cols={100}
              rows={5}
              name=""
              id=""
              placeholder="Type Your Message"
            />
          </div>
          <div className="appointmentFormButtonContainer">
            <Link>
              {" "}
              <button>Book an Appointment</button>
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AppointmentFormMain;
