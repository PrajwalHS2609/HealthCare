import React from "react";
import "./RadiationDeptContent.css";
import RadiationDeptContentImg from "./RadiationDeptContentImg";
const RadiationDeptContent = () => {
  return (
    <div className="radiationDeptContentWrapper">
      <RadiationDeptContentImg />
      <div className="radiationDeptContentPara">
        <p>
          <span>R</span>adiation therapy can be given inside or outside of your
          body. The most common kind is external beam radiation therapy. This
          treatment uses a large machine called a linear accelerator.
          High-energy beams are aimed from the machine to a precise point on
          your body. Modern methods of radiation are precise. They aim beams
          directly at the cancer while protecting healthy tissues from high
          doses of radiation. But other types of radiation therapy exist,
          including proton radiation.
        </p>
        <p>
          Radiation treatment that goes inside the body is called brachytherapy
          (brak-e-THER-uh-pee). Brachytherapy also is a common cancer treatment.
          During this therapy, a provider places a small solid implant in or
          near the cancer.
        </p>
      </div>
    </div>
  );
};

export default RadiationDeptContent;
