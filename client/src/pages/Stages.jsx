import React from "react";
import "./CSS/Other.css";

import design from "./images/PatentCertificate.png";
import Web from "./images/Patent(562089).jpg";
import LOR from "./images/LOR.png";

function Stages() {
  return (
    <section id="workflow">

      <h2 className="skill-title">Research & Development</h2>

      <div className="stage-container">

        <div className="stage-card">
          <h4>Patented – E-Governance Solution</h4>

          <img
            className="stage-imgs"
            src={design}
            alt="Patent Certificate"
          />

          <p className="Desc">
            Recognized as an inventor of
            <i>
              {" "}
              "Automated Stamp Paper Kiosk with Refund Mechanism
           <br></br>   and Invisible QR Code Authentication"
            </i>
          </p>
        </div>


        <div className="stage-card">
          <h4>Patent – Stamp Paper Issuance System</h4>

          <img
            className="stage-imgs"
            src={Web}
            alt="Patent Document"
          />

          <p className="Desc">
            Recognized as an inventor of
            <i>
              {" "}
              "Automated Kiosk-Based System for Stamp Paper
             <br></br> Issuance and Method Thereof"
            </i>
          </p>
        </div>
        

      </div>

    </section>
  );
}

export default Stages;