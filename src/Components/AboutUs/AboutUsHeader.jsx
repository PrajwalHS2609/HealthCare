import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import aboutUsBanner from "./../../Imgs/aboutUsBanner.png"
const AboutUsHeader = () => {
  return (
<div className="contactUsHeader">
        <div className="contactUsImgContainer">
      <img
        src={aboutUsBanner}
        alt=""
      />
      <div className="contactUsHeaderCover">
        <div className="contactUsHeading">
          <h2>About Us</h2>
          <BreadCrumb/>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default AboutUsHeader
