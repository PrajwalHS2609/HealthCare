import React from "react";
import "./Doctors.css";
import DoctorsMain from "./DoctorsMain";
import DoctorsHead from "./DoctorsHead";

const Doctors = () => {
  return (
    <div className="doctorsContainer">
      <DoctorsHead />
      <DoctorsMain />
    </div>
  );
};

export default Doctors;
