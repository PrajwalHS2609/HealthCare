import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer1 = () => {
  return (
    <div className="footer1">
      <div className="footer1Content1">
        <div className="footer1Logo">
          <img
            src="https://doctean.themeht.com/wp-content/uploads/2024/04/logo-white.svg"
            alt=""
          />
        </div>
        <p>
          From wellness tips to expert advice, we're here to support your
          journey to a healthier you. Our team of dedicated healthcare providers
          has years of experience and expertise.
        </p>
      </div>
      <div className="footer1Content2">
        <h3>Useful Links</h3>
        <li>
          <Link>Departments</Link>
        </li>
        <li>
          <Link>About Us</Link>
        </li>
        <li>
          <Link>Team Members</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
      </div>
      <div className="footer1Content3">
        <h3>Our Departments</h3>
        <li>
          <Link>Radiation Therapy</Link>
        </li>
        <li>
          <Link>Orthopedics</Link>
        </li>
        <li>
          <Link>Dental Care</Link>
        </li>
        <li>
          <Link>Cardiology</Link>
        </li>
        <li>
          <Link>Neurology</Link>
        </li>
      </div>

      <div className="footer1Content4">
        <h3>Opening Hours</h3>
        <li><div>Mon - Tues </div> <div>09:00AM - 6:00PM</div></li>
        <li><div>Wed - Thu</div>   <div>09:00AM - 6:00PM</div></li>
        <li><div>Fri - Sat</div>   <div>09:00AM - 6:00PM</div></li>
        <li><div>Sunday </div>     <div>Emergency Only</div></li>
      </div>
    </div>
  );
};

export default Footer1;
