import React from "react";
import "./Doctors.css";
import DoctorsCard from "./DoctorsCard";
// import Carousel from "react-bootstrap/Carousel";

const DoctorsMain = () => {
  return (
    <div className="doctorsMain">
      {/* <Carousel fade className="MedicalServiceCarouselContainer">
        <Carousel.Item className="MedicalServiceCarouselItem" interval={3000}>
          <div className="medicalServiceMainContent">
            <DoctorsCard />
            <DoctorsCard />
            <DoctorsCard />
            <DoctorsCard />
          </div>
        </Carousel.Item>
        <Carousel.Item className="MedicalServiceCarouselItem" interval={3000}>
          <div className="medicalServiceMainContent">
            <DoctorsCard />
            <DoctorsCard />
            <DoctorsCard />
            <DoctorsCard />
          </div>
        </Carousel.Item>
        <Carousel.Item className="MedicalServiceCarouselItem" interval={3000}>
          <div className="medicalServiceMainContent">
            <DoctorsCard />
            <DoctorsCard />
            <DoctorsCard />
            <DoctorsCard />
          </div>
        </Carousel.Item>
        <Carousel.Item className="MedicalServiceCarouselItem" interval={3000}>
          <div className="medicalServiceMainContent">
            <DoctorsCard />
            <DoctorsCard />
            <DoctorsCard />
            <DoctorsCard />
          </div>
        </Carousel.Item>
      </Carousel> */}
      <DoctorsCard />
      <DoctorsCard />
      <DoctorsCard />
      <DoctorsCard />
    </div>
  );
};

export default DoctorsMain;
