import React from "react";
import AppointmentFormMain from "../HomePage/Appointment/AppointmentForm/AppointmentFormMain";
import AppointmentFormHead from "../HomePage/Appointment/AppointmentForm/AppointmentFormHead";
import TestimonialsSlide from "../HomePage/Testimonials/TestimonialsSlide";
import doubleQuotes from "./../../Imgs/double-quotes.png";

const AboutUsAppointment = () => {
  return (
    <div className="contactUsForm">
      <div className="contactUsFormContent" id="contactUsFormContent1">
        <TestimonialsSlide />
        <div className="TestimonialsContentQuote">
            <img src={doubleQuotes} alt="doubleQuotes" />
        </div>
      </div>
      <div className="contactUsFormContent" id="contactUsFormContent2">
        <AppointmentFormHead />
        <AppointmentFormMain />{" "}
      </div>
    </div>
  );
};

export default AboutUsAppointment;
