import React from "react";
import benefitsImg from "../../img/benefits-section/benefits_img.png";
import BackDecoration from "../decoration/BackDecoration";

function BenefitsSection() {
  const benefitsData = [
    {
      id: 1,
      icon: "fa-solid fa-check",
      text: "Aumenta tus ventas notablemente",
    },
    {
      id: 2,
      icon: "fa-solid fa-check",
      text: "Incrementa tus proyecciones a futuro inclusive durante el primer mes",
    },
    {
      id: 3,
      icon: "fa-solid fa-check",
      text: "Potencia las estrategias hacia futuros clientes para afianzar ventas",
    },
    {
      id: 4,
      icon: "fa-solid fa-check",
      text: "Ofrecemos seguro de responsabilidad civil contra todo riesgo",
    },
    {
      id: 5,
      icon: "fa-solid fa-check",
      text: "Atencion al usuario 24 hs",
    },
  ];

  const benefitsList = benefitsData.map((e) => {
    return (
      <li className="benefits-content-item" key={e.id}>
        <span className="benefits-content-icon">
          <i className={e.icon}></i>
        </span>
        <span className="benefits-content-text">{e.text}</span>
      </li>
    );
  });

  return (
    <section className="benefits-section">
      <BackDecoration>
        <div className="benefits-container container">
          <div className="benefits-title-container">
            <h2 className="benefits-title">¿Qué hace diferente a Tickea?</h2>
            <p className="benefits-subtitle">
              Hoy queremos crecer contigo pero mañana queremos verte despegar.
            </p>
          </div>

          <div className="benefits-content-container">
            <p className="benefits-content-paragraph">
              Sabemos que existen muchas plataforma donde poner tu negocio pero
              lo que nos diferencia es nuestro compromiso de ayudarte a ser cada
              día mejor, que logres tus metas y que tengas al alcance de un clic
              una plataforma que te de seguridad sobre tu dinero y tu
              estabilidad en internet.
              <br />
              Entendemos que detrás de cada evento, cada cita y cada reservación
              se encuentran personas de carne y hueso que solo quieren ver su
              negocio despegar, por eso que mejor delegar la tecnologia en un
              equipo comprometido que quiere ver tu negocio en la cima.
            </p>
            <ul className="benefits-content-list">{benefitsList}</ul>
          </div>

          <div className="benefits-img-container">
            <img
              src={benefitsImg}
              alt="Girl Smilling"
              className="benefits-img"
            />
          </div>
        </div>
      </BackDecoration>
    </section>
  );
}

export default BenefitsSection;
