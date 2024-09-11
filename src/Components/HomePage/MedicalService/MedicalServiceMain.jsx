import React from "react";
import MedicalServiceCard from "./MedicalServiceCard";
import Carousel from "react-bootstrap/Carousel";

const MedicalServiceMain = () => {
  return (
    <div className="medicalServiceMain">
      <Carousel fade className="MedicalServiceCarouselContainer">
        <Carousel.Item className="MedicalServiceCarouselItem" interval={3000}>
          <div className="medicalServiceMainContent">
            <MedicalServiceCard organ="BRAIN" name="Neurology" />
            <MedicalServiceCard organ="BRAIN" name="Neurology" />
            <MedicalServiceCard organ="BRAIN" name="Neurology" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="MedicalServiceCarouselItem" interval={3000}>
          <div className="medicalServiceMainContent">
            <MedicalServiceCard organ="HEART" name="Cardiology" />
            <MedicalServiceCard organ="HEART" name="Cardiology" />
            <MedicalServiceCard organ="HEART" name="Cardiology" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="MedicalServiceCarouselItem" interval={3000}>
          <div className="medicalServiceMainContent">
            <MedicalServiceCard organ="KIDNEY" name="nephrologist" />
            <MedicalServiceCard organ="KIDNEY" name="nephrologist" />
            <MedicalServiceCard organ="KIDNEY" name="nephrologist" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="MedicalServiceCarouselItem" interval={3000}>
          <div className="medicalServiceMainContent">
            <MedicalServiceCard organ="EYES" name="ophthalmologist" />
            <MedicalServiceCard organ="EYES" name="ophthalmologist" />
            <MedicalServiceCard organ="EYES" name="ophthalmologist" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MedicalServiceMain;
