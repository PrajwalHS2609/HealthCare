import React from "react";
import "./ContactUsForm.css";
import AppointmentFormHead from "../../HomePage/Appointment/AppointmentForm/AppointmentFormHead";
import AppointmentFormMain from "../../HomePage/Appointment/AppointmentForm/AppointmentFormMain";
const ContactUsForm = () => {
  return (
    <div className="contactUsForm">
      <div className="contactUsFormContent" id="contactUsFormContent1">
        <img
          src="https://images.unsplash.com/photo-1666214280465-a40313304801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="contactUsFormContent" id="contactUsFormContent2">
        <AppointmentFormHead />
        <AppointmentFormMain />{" "}
      </div>
    </div>
  );
};

export default ContactUsForm;
