import React, { useRef, useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  // faBars,
  faX,
  faMedkit,
  faArrowRight,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";
import menuBar from "./../../Imgs/menu.png";
const Menu = () => {
  let [drop, setDrop] = useState(false);
  let dropRef = useRef();
  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");

    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(100%)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(100%)";
  };
  let handleDropDown = () => {
    if (!drop) {
      setDrop(true);
      dropRef.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef.current.style.display = "none";
      console.log("up");
    }
  };
  return (
    <div className="menuContainer">
      <div className="menuContent1">
        <li className="menuContentList1">
          <NavLink className="menuNavLink" to={"/"}>
            Home
          </NavLink>{" "}
        </li>
        {/* <li className="menuContentList2">
          <NavLink className="menuNavLink" to={"/services"}>
            Services
          </NavLink>{" "}
          <FontAwesomeIcon
            icon={faChevronDown}
            className="dropdownIcon"
          ></FontAwesomeIcon>
        </li> */}
        <li className="menuContentList2">
          <NavLink className="menuNavLink" to={"/"}>
            Departments
          </NavLink>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="dropdownIcon"
          ></FontAwesomeIcon>
          <div className="dropDown" ref={dropRef}>
            <li className="dropContentList1">
              <FontAwesomeIcon
                icon={faMedkit}
                className="medikitIcon"
              ></FontAwesomeIcon>{" "}
              <NavLink className="navLink" id="navLink1" to={"/radiation-therapy"}>
                Radiation Therapy
              </NavLink>
            </li>
            <li className="dropContentList2">
              <FontAwesomeIcon
                icon={faMedkit}
                className="medikitIcon"
              ></FontAwesomeIcon>{" "}
              <NavLink className="navLink" id="navLink2" to={"/"}>
                Orthopedics
              </NavLink>
            </li>
            <li className="dropContentList3">
              <FontAwesomeIcon
                icon={faMedkit}
                className="medikitIcon"
              ></FontAwesomeIcon>
              <NavLink className="navLink" id="navLink3" to={"/"}>
                Gynecologist
              </NavLink>
            </li>
            <li className="dropContentList4">
              <FontAwesomeIcon
                icon={faMedkit}
                className="medikitIcon"
              ></FontAwesomeIcon>
              <NavLink className="navLink" id="navLink4" to={"/"}>
                Cardiologist
              </NavLink>
            </li>
            <li className="dropContentList5">
              <FontAwesomeIcon
                icon={faMedkit}
                className="medikitIcon"
              ></FontAwesomeIcon>
              <NavLink className="navLink" id="navLink5" to={"/"}>
                Neurology
              </NavLink>
            </li>
            <li className="dropContentList6">
              <FontAwesomeIcon
                icon={faMedkit}
                className="medikitIcon"
              ></FontAwesomeIcon>
              <NavLink className="navLink" id="navLink6">
                Pediatrics
              </NavLink>
            </li>
          </div>
        </li>
        <li className="menuContentList3">
          <NavLink to={"/about-us"}>About Us</NavLink>
        </li>
        <li className="menuContentList4">
          <NavLink to={"/contact-us"}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Blogs</NavLink>
        </li>
        <li className="emergencyBlock">
          <a href="tel:1234567890">
            {" "}
            <div>
              {" "}
              <FontAwesomeIcon
                icon={faHospital}
                className="emergencyIcon"
              ></FontAwesomeIcon>
            </div>
            <div>
              <li>Emergency Line :</li>
              <li>+91 1234567890</li>
            </div>
          </a>
        </li>
      </div>
      <div className="menuContent2">
        <Link>
          {" "}
          <button>
            MAKE AN APPOINTMENT{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="buttonArrow"
            ></FontAwesomeIcon>
          </button>
        </Link>
      </div>
      <div className="menuContent3">
        <img src={menuBar} alt="menuBar" onClick={showSideBar} />
      </div>
      <div className="respMenu">
        <div className="innerRespMenu">
          {" "}
          <FontAwesomeIcon
            icon={faX}
            className="closeX"
            onClick={hideSideBar}
          ></FontAwesomeIcon>
          <div className="innerMenu">
            <li className="menuContentList1">
              <NavLink className="menuNavLink" to={"/"} onClick={hideSideBar}>
                Home
              </NavLink>{" "}
            </li>
            <li className="menuContentList2" onClick={handleDropDown}>
              <NavLink className="menuNavLink" to={""}>
                Departments{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="menuNavDropIcon"
                ></FontAwesomeIcon>
              </NavLink>
              <div className="innerMenuDrop" ref={dropRef}>
                <li className="dropContentList1">
                  <FontAwesomeIcon
                    icon={faMedkit}
                    className="medikitIcon"
                  ></FontAwesomeIcon>{" "}
                  <NavLink
                    className="navLink"
                    id="navLink1"
                    to={"/radiation-therapy"}
                    onClick={hideSideBar}
                  >
                    Radiation Therapy
                  </NavLink>
                </li>{" "}
                <li className="dropContentList2">
                  <FontAwesomeIcon
                    icon={faMedkit}
                    className="medikitIcon"
                  ></FontAwesomeIcon>{" "}
                  <NavLink
                    className="navLink"
                    id="navLink2"
                    to={"/"}
                    onClick={hideSideBar}
                  >
                    Orthopedics
                  </NavLink>
                </li>{" "}
                <li className="dropContentList3">
                  <FontAwesomeIcon
                    icon={faMedkit}
                    className="medikitIcon"
                  ></FontAwesomeIcon>
                  <NavLink
                    className="navLink"
                    id="navLink3"
                    to={"/"}
                    onClick={hideSideBar}
                  >
                    Gynecologist
                  </NavLink>
                </li>{" "}
                <li className="dropContentList4">
                  <FontAwesomeIcon
                    icon={faMedkit}
                    className="medikitIcon"
                  ></FontAwesomeIcon>
                  <NavLink
                    className="navLink"
                    id="navLink4"
                    to={"/"}
                    onClick={hideSideBar}
                  >
                    Cardiologist
                  </NavLink>
                </li>{" "}
                <li className="dropContentList5">
                  <FontAwesomeIcon
                    icon={faMedkit}
                    className="medikitIcon"
                  ></FontAwesomeIcon>
                  <NavLink
                    className="navLink"
                    id="navLink5"
                    to={"/"}
                    onClick={hideSideBar}
                  >
                    Neurology
                  </NavLink>
                </li>{" "}
                <li className="dropContentList6">
                  <FontAwesomeIcon
                    icon={faMedkit}
                    className="medikitIcon"
                  ></FontAwesomeIcon>
                  <NavLink
                    className="navLink"
                    id="navLink6"
                    onClick={hideSideBar}
                  >
                    Pediatrics
                  </NavLink>
                </li>{" "}
              </div>
            </li>
            <li className="menuContentList3">
              <NavLink to={"/about-us"} onClick={hideSideBar}>
                About Us
              </NavLink>
            </li>{" "}
            <li className="menuContentList4">
              <NavLink to={"/contact-us"} onClick={hideSideBar}>
                Contact Us
              </NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/"} onClick={hideSideBar}>
                Blogs
              </NavLink>
            </li>
            <li className="emergencyBlock">
              <a href="tel:1234567890" onClick={hideSideBar}>
                {" "}
                <div>
                  {" "}
                  <FontAwesomeIcon
                    icon={faHospital}
                    className="emergencyIcon"
                  ></FontAwesomeIcon>
                </div>
                <div>
                  <li>Emergency Line :</li>
                  <li>+91 1234567890</li>
                </div>
              </a>
            </li>
            <li className="appointRespBtn" style={{ border: "none" }}>
              <Link to={"/"} onClick={hideSideBar}>
                <button>Make an Appointment</button>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
