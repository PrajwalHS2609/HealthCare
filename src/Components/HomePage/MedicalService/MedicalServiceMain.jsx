import React from "react";
import MedicalServiceCard from "./MedicalServiceCard";
import Carousel from "react-bootstrap/Carousel";

const MedicalServiceMain = () => {
  return (
    <div className="medicalServiceMain">
      <Carousel fade className="MedicalServiceCarouselContainer">
        <Carousel.Item className="MedicalServiceCarouselItem" interval={3000}>
          <div className="medicalServiceMainContent">
            <MedicalServiceCard />
            <MedicalServiceCard />
            <MedicalServiceCard />
          </div>
        </Carousel.Item>
        <Carousel.Item className="MedicalServiceCarouselItem" interval={3000}>
          <div className="medicalServiceMainContent">
            <MedicalServiceCard />
            <MedicalServiceCard />
            <MedicalServiceCard />
          </div>
        </Carousel.Item>
        <Carousel.Item className="MedicalServiceCarouselItem" interval={3000}>
          <div className="medicalServiceMainContent">
            <MedicalServiceCard />
            <MedicalServiceCard />
            <MedicalServiceCard />
          </div>
        </Carousel.Item>
        <Carousel.Item className="MedicalServiceCarouselItem" interval={3000}>
          <div className="medicalServiceMainContent">
            <MedicalServiceCard />
            <MedicalServiceCard />
            <MedicalServiceCard />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MedicalServiceMain;
