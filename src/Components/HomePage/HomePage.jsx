import React from "react";
import HeaderCarousel from "./HeaderCarousel/HeaderCarousel";
import MedicalService from "./MedicalService/MedicalService";
import Testimonials from "./Testimonials/Testimonials";
import WeProvide from "./WeProvide/WeProvide";
import Doctors from "./Doctors/Doctors";
import MedicalMarquee from "./MedicalMarquee/MedicalMarquee";
import Appointment from "./Appointment/Appointment";

const HomePage = () => {
  return (
    <div>
      <HeaderCarousel />
      <WeProvide/>
      <MedicalMarquee/>
      <MedicalService />
      <Appointment/>
      <Doctors/>
      <Testimonials />
    </div>
  );
};

export default HomePage;
