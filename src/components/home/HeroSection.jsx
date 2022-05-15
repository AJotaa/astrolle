import React from "react";
import heroImage from "../../img/hero-section/hero.png";
import heroBack from "../../img/hero-section/hero-back.png";
import BaseButton from "../ui/BaseButton";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-controls">
          <div className="hero-info">
            <div className="hero-title">
              <h1 className="hero-title-text title-text">
                Existe una forma mejor de crecer.
              </h1>
            </div>
            <div className="hero-paragraph">
              <p className="hero-paragraph-text paragraph-text">
                Estamos enfocado en ayudarte a crecer tu negocio de una forma
                sencilla, a través de las automatizaciones de reservaciones y
                pos-venta. Porque "bueno para el negocio" también debe
                significar "bueno para el cliente".
              </p>
            </div>
          </div>
          <div className="hero-buttons">
            <ul className="hero-buttons-list">
              <li className="hero-btn-item">
                <BaseButton mode={"big"} className="get-started">
                  Empieza Ya
                </BaseButton>
              </li>
              <li className="hero-btn-item">
                <BaseButton mode={"flat"} className="register">
                  Registrate
                </BaseButton>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={heroBack} alt="" className="hero-image-back" />
          <img src={heroImage} alt="" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;