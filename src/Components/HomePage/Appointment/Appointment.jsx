import React from "react";
import "./Appointment.css";
import AppointmentWork from "./AppointmentWork/AppointmentWork";
import AppointmentTreatment from "./AppointmentTreatment/AppointmentTreatment";
import AppointmentForm from "./AppointmentForm/AppointmentForm";
const Appointment = () => {
  return (
    <div className="appointmentContainer">
      <AppointmentWork />
      <div className="appointmentContent">
        <AppointmentTreatment />
        <AppointmentForm/>
      </div>
    </div>
  );
};

export default Appointment;
