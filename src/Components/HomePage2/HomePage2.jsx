import React from "react";
import Header2Carousel from "./Header2Carousel/Header2Carousel";
import AppointSteps from "./AppointSteps/AppointSteps";
import AboutUsContact from "../AboutUs/AboutUsContact/AboutUsContact";
import MedicalService from "./MedicalService/MedicalService2";
import MedicalMarquee from "./../HomePage/MedicalMarquee/MedicalMarquee";
import Doctors from "./../HomePage/Doctors/Doctors";
import ContactUsForm from "./../ContactUs/ContactUsForm/ContactUsForm";
import Home2AboutUs from "./Home2AboutUs/Home2AboutUs";

const HomePage2 = () => {
  return (
    <div style={{ backgroundColor: "var(--customLightBlue)" }}>
      <Header2Carousel />
      <AboutUsContact />
      <Home2AboutUs/>
      <MedicalService />
      <MedicalMarquee />
      <AppointSteps />
      <Doctors />
      <ContactUsForm />
    </div>
  );
};

export default HomePage2;
