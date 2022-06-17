import React from "react";
import featuresOneImage from "../../img/features-section/features1.png";
import featuresOneBackImage from "../../img/features-section/features1-back.png";
import featuresTwoImage from "../../img/features-section/features2.png";
import featuresTwoBackImage from "../../img/features-section/features2-back.png";
import DotsDecoration from "../decoration/DotsDecoration";
import BackDecoration from "../decoration/BackDecoration";

function FeaturesSection() {
  return (
    <section className="features-section">
      <BackDecoration>
        <DotsDecoration classLocation="decoration-one" />
        <DotsDecoration classLocation="decoration-two" />

        <div className="features-container container">
          <ul className="features-list">
            <li className="features-item features-item-one">
              <div className="features-image-container">
                <img
                  className="features-image"
                  src={featuresOneImage}
                  alt="laptop"
                />
                <img
                  className="features-image-back"
                  src={featuresOneBackImage}
                  alt=""
                />
              </div>
              <div className="features-text">
                <h3 className="features-text-title">
                  Somos la fusión perfecta entre Marketing y Software
                </h3>
                <p className="features-text-paragraph">
                  Entendemos que tener un sitio web no es solo contratar un
                  programador, va más alla, se trata de tener una estrategia que
                  te permita crecer y tener el soporte oportuno para que el
                  ciclo del producto y la venta esten en su flujo normal.
                </p>
              </div>
            </li>
            <li className="features-item features-item-two">
              <div className="features-text">
                <h3 className="features-text-title">
                  Hacemos más que solo vender tickets
                </h3>
                <p className="features-text-paragraph">
                  Organizar un evento, tener tu propio negocio, atender clientes
                  todo junto ya es bastante complejo, por eso nuestro proyecto
                  va un poco más alla, nuestra idea es ayudarte a automatizar
                  tus ventas, tus servicios posventa y que tu solo te preocupes
                  en prestar el mejor servicio posible.
                </p>
              </div>
              <div className="features-image-container">
                <img
                  className="features-image"
                  src={featuresTwoImage}
                  alt="setup"
                />
                <img
                  className="features-image-back"
                  src={featuresTwoBackImage}
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </BackDecoration>
    </section>
  );
}

export default FeaturesSection;
