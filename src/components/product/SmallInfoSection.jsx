import React from "react";

function SmallInfoSection() {
  return (
    <section className="small-info-section">
      <div className="small-info-container container">
        <ul className="small-info-list">
          <li className="small-info-item">
            <h3 className="small-info-header title-text">
              ¿Por qué iniciar tu estrategia junto con nosotros?
            </h3>
            <p className="small-info-paragraph paragraph-text">
              Entendemos que tener un sitio web no es solo contratar un
              programador, va más alla, se trata de tener una estrategia que te
              permita crecer y tener el soporte oportuno para que el ciclo del
              producto y la venta esten en su flujo normal.
            </p>
          </li>
          <li className="small-info-item">
            <h3 className="small-info-header title-text">
              Cuentas con nuestro apoyo
            </h3>
            <p className="small-info-paragraph paragraph-text">
              Sabemos que nunca es fácil iniciarse solo en el mundo de los
              negocios. Entendemos que tener un sitio web no es solo contratar
              un programador, se trata de tener una estrategia y de tener el
              soporte oportuno para que el ciclo del produco esté en su flujo
              normal.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SmallInfoSection;
