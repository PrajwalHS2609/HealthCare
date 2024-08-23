import React from "react";
import "./RadiationDeptHow.css"
import tick from "./../../../Imgs/checkMark.png";
const RadiationDeptHow = () => {
  return (
    <div className="radiationDeptHow">
      <h2>How radiation therapy is used in people with cancer</h2>
      <p>
        Radiation therapy is used to treat just about every type of cancer. In
        fact, more than half of all people with cancer will receive radiation
        therapy as part of their treatment.
      </p>
        <li>
          <img src={tick} alt="" />
          As the only treatment for cancer. This is called the primary
          treatment.
        </li>
        <li>
          <img src={tick} alt="" />
          Before surgery, to shrink a cancer. This is called neoadjuvant
          therapy.
        </li>
        <li>
          <img src={tick} alt="" />
          After surgery, to stop the growth of any remaining cancer cells. This
          is called adjuvant therapy.
        </li>
        <li>
          <img src={tick} alt="" />
          With other treatments, such as chemotherapy, to destroy cancer cells.
        </li>
        <li>
          <img src={tick} alt="" />
          To relieve symptoms caused by advanced cancer.
        </li>
    </div>
  );
};

export default RadiationDeptHow;
