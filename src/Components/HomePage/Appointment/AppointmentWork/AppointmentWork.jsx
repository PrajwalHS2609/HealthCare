import React from "react";
import "./AppointmentWork.css";
import AppointmentWorkCard from "./AppointmentWorkCard";
const AppointmentWork = () => {
  return (
    <div className="AppointmentWork">
      <AppointmentWorkCard />
      <AppointmentWorkCard />
      <AppointmentWorkCard />
    </div>
  );
};

export default AppointmentWork;
