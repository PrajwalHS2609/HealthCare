import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./RadiationDeptFaq.css";

const RadiationDeptFaqAcc = () => {
  return (
    <div className="radiationDeptFaqAcc">
      <Accordion defaultActiveKey="0" className="accordionContainer">
        <Accordion.Item eventKey="0" className="accordionItem">
          <Accordion.Header className="accordionHeader">
            What medical services do you provide?
          </Accordion.Header>
          <Accordion.Body className="accordionPara">
            <p>
              We offer a comprehensive range of medical services across various
              departments, including Cardiology, Neurology, Urology, General
              Surgery, Orthopedics, Gynecology, Pediatrics, Internal Medicine,
              Oncology, ENT, Dermatology, and additional specialties. Visit our
              services page for more information.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="accordionItem">
          <Accordion.Header className="accordionHeader">
            How can I make an appointment?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              {" "}
              We offer a comprehensive range of medical services across various
              departments, including Cardiology, Neurology, Urology, General
              Surgery, Orthopedics, Gynecology, Pediatrics, Internal Medicine,
              Oncology, ENT, Dermatology, and additional specialties. Visit our
              services page for more information.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="accordionItem">
          <Accordion.Header className="accordionHeader">
            How do I request prescription refills?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              {" "}
              We offer a comprehensive range of medical services across various
              departments, including Cardiology, Neurology, Urology, General
              Surgery, Orthopedics, Gynecology, Pediatrics, Internal Medicine,
              Oncology, ENT, Dermatology, and additional specialties. Visit our
              services page for more information.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="accordionItem">
          <Accordion.Header className="accordionHeader">
            What should I bring to my first appointment?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              {" "}
              We offer a comprehensive range of medical services across various
              departments, including Cardiology, Neurology, Urology, General
              Surgery, Orthopedics, Gynecology, Pediatrics, Internal Medicine,
              Oncology, ENT, Dermatology, and additional specialties. Visit our
              services page for more information.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default RadiationDeptFaqAcc;
