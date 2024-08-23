import React from "react";
import ContactUsHeader from "./ContactUsHeader";
import ContactUsForm from "./ContactUsForm/ContactUsForm";
import ContactUsLocations from "./ContactUsLocations/ContactUsLocations";
import ContactUsMarquee from "./ContactUsMarquee";

const ContactUs = () => {
  return (
    <div>
      <ContactUsHeader
        head="Contact Us"
        img="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ContactUsForm />
      <ContactUsMarquee />
      <ContactUsLocations />
    </div>
  );
};

export default ContactUs;
