import React from "react";
import "./MedicalService2.css";
import MedicalService2Head from "./MedicalService2Head";
import MedicalService2Card from "./MedicalService2Card";
const MedicalService2 = () => {
  return (
    <div className="medicalService2Container">
      <MedicalService2Head />
      <div className="medicalService2Content">
        <MedicalService2Card />
        <MedicalService2Card />
        <MedicalService2Card />
        <MedicalService2Card />
        <MedicalService2Card />
        <MedicalService2Card />
      </div>
    </div>
  );
};

export default MedicalService2;
