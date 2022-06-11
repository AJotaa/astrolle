import React from "react";

function RegisterSection() {
  return (
    <section className="register-section">
      <div className="register-contaier container">
        <div className="register-background">
          <div className="register-content-container">
            <div className="register-text-container">
              <h2 className="register-text">
                Déjanos tus datos y te ayudaremos a potenciar tu negocio
              </h2>
            </div>
            <div className="register-form-container">
              <div className="register-form-text">
                <p className="register-form-paragraph">
                  Usaremos tus datos para comunicarnos contigo y que nos cuentes
                  sobre tu negocio.
                </p>
              </div>
              <form className="register-form">
                <div className="form-name">
                  <input type="text" className="form-name-input" />
                </div>
                <div className="form-tlf">
                  <input type="text" className="form-tlf-input" />
                </div>
                <div className="form-mail">
                  <input type="text" className="form-mail-input" />
                </div>
                <div className="register-form-button">
                  <button className="from-button">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;
