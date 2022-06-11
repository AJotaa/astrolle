import React from "react";
import BaseButton from "../interface/BaseButton";

function CtaSection() {
  const ctaData = [
    {
      id: 1,
      icon: "fa-solid fa-life-ring",
      description: "Soporte online garantizado para tus clientes",
    },
    {
      id: 2,
      icon: "fa-solid fa-wrench",
      description: "Automatizaciones de Correos electronicos, SMS o Llamadas",
    },
    {
      id: 3,
      icon: "fa-solid fa-suitcase",
      description: "Privacidad y seguridad en los metodos de pago",
    },
  ];

  const ctaFeatures = ctaData.map((e) => {
    return (
      <li key={e.id} className="cta-features-item">
        <span className="cta-features-icon">
          <i className={e.icon}></i>
        </span>
        <span className="cta-features-text paragraph-text">
          {e.description}
        </span>
      </li>
    );
  });

  return (
    <section className="cta-section">
      <div className="cta-container container">
        <div className="cta-start-container">
          <div className="cta-title-container">
            <h1 className="cta-title title-text">
              Tickea la plataforma de reservaciones mas personalizable para tu
              negocio
            </h1>
          </div>
          <div className="cta-btn-container">
            <BaseButton>Empieza ahora</BaseButton>
          </div>
        </div>
        <div className="cta-features-container">
          <ul className="cta-features-list">{ctaFeatures}</ul>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
