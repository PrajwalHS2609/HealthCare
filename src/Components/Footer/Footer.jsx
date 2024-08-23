import React from "react";
import "./Footer.css";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent1">
        <Footer1/>
      </div>
      <div className="footerContent2">
        <Footer2/>
      </div>
      <div className="footerContent3">
        <Footer3/>
      </div>
    </div>
  );
};

export default Footer;
