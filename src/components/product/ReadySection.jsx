import React from "react";
import BaseButton from "../interface/BaseButton";

import backgroundImg from "../../img/ready-section/background.png";

function ReadySection() {
  return (
    <section className="ready-section">
      <div
        className="ready-container container"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="ready-content">
          <div className="ready-title-container">
            <h1 className="ready-title">¿Listo para empezar?</h1>
          </div>
          <div className="ready-control-container">
            <BaseButton>Comenzar</BaseButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReadySection;
