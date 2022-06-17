import React from "react";
import registerImg from "../../img/register-section/Imagen.png";
import RegisterForm from "../interface/RegisterForm";

function RegisterSection() {
  return (
    <section className="register-section page-top">
      <div className="register-container container">
        <div
          className="register-background"
          style={{ background: `url(${registerImg})` }}
        >
          <div className="register-content-container">
            <div className="register-content-div">
              <div className="register-content">
                <h3 className="register-text">
                  Déjanos tus datos y te ayudaremos a potenciar tu negocio
                </h3>
              </div>
            </div>

            <span className="separador"></span>

            <div className="register-content-div">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;
