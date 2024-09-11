import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UpperNav from "./Components/UpperNav/UpperNav";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import RadiationDept from "./Components/RadiationDept/RadiationDept";
import ScrollTo from "./Components/ScrollTo/ScrollTo";
import HomePage2 from "./Components/HomePage2/HomePage2";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UpperNav />
        <NavBar />
        <ScrollTo />
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          <Route path="/home2" element={<HomePage2 />} />{" "}
          <Route path="/radiation-therapy" element={<RadiationDept />} />
          <Route path="/contact-us" element={<ContactUs />} />{" "}
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
