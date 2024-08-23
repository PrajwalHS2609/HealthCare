import React from "react";
import "./AppointmentTreatment.css";
import AppointmentTreatmentCard from "./AppointmentTreatmentCard";
const AppointmentTreatment = () => {
  return (
    <div className="AppointmentTreatment">
      <h2>Get Amazing Treatment</h2>
      <p>
        We take a holistic approach to care, emphasizing preventive measures,
        early detection, and personalized treatment plans.{" "}
      </p>
      <AppointmentTreatmentCard />
      <AppointmentTreatmentCard />
      <AppointmentTreatmentCard />
    </div>
  );
};

export default AppointmentTreatment;
