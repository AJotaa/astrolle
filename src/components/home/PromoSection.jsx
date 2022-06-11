import React from "react";
import imgOne from "../../img/promo-section/promo_img1.png";
import imgTwo from "../../img/promo-section/promo_img2.png";
import DotsDecoration from "../decoration/DotsDecoration";

function PromoSection() {
  return (
    <section className="promo-section">
      <div className="promo-container container">
        <div className="promo-image-container">
          <div className="promo-image">
            <img src={imgOne} alt="boy walking" className="promo-image-one" />
          </div>
          <div className="promo-image">
            <img src={imgTwo} alt="girl smilling" className="promo-image-two" />
          </div>
        </div>
        <div className="promo-text-container">
          <div className="promo-title-container">
            <h3 className="promo-title title-text">
              Tu tiempo vale, tus clientes lo amarán
            </h3>
          </div>
          <div className="promo-paragraph-container">
            <p className="promo-paragraph paragraph-text">
              Nuestro trabajo es ayudarte a automatizar tu agenda permitiendoles
              a tus clientes reservar, cancelar, chequear sus reservaciones con
              tu negocio sin necesidad de levantar su telefono, así podras
              mantenerte enfocado en lo realmente importante.
            </p>
          </div>
        </div>
      </div>
      <DotsDecoration classLocation="decoration-one" />
    </section>
  );
}

export default PromoSection;
