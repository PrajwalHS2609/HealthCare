import React from "react";
import "./AppointSteps.css";
import AppointStepsCard from "./AppointStepsCard";
import AppointStepsCard2 from "./AppointStepsCard2";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { faSuitcaseMedical } from "@fortawesome/free-solid-svg-icons";

const AppointSteps = () => {
  return (
    <div className="appointSteps">
      <AppointStepsCard number="01" icon={faUserDoctor} head="Take Appointment" />
      <AppointStepsCard2 />
      <AppointStepsCard number="03" icon={faSuitcaseMedical} head="Started Treatment" />

    </div>
  );
};

export default AppointSteps;
