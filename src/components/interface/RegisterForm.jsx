import React from "react";
import { useState } from "react";
import BaseButton from "./BaseButton";

function RegisterForm() {
  const [name, setName] = useState("");
  const [tlf, setTlf] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    alert(`name: ${name}, telefono: ${tlf}, email: ${email}`);
    e.preventDefault();

    setName("");
    setTlf("");
    setEmail("");
  }

  function handleName(e) {
    setName(e.target.value);
  }
  function handleTlf(e) {
    setTlf(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <form className="register-content register-form" onSubmit={handleSubmit}>
      <div className="register-form-text">
        <p className="register-form-paragraph">
          Usaremos tus datos para comunicarnos contigo y que nos cuentes sobre
          tu negocio.
        </p>
      </div>
      <div className="register-form-query">
        <div className="form-name input-div">
          <input
            type="text"
            className="form-name-input input-elem"
            placeholder="Nombre"
            onChange={handleName}
            value={name}
          />
        </div>
        <div className="form-tlf input-div">
          <input
            type="number"
            className="form-tlf-input input-elem"
            placeholder="Teléfono"
            onChange={handleTlf}
            value={tlf}
          />
        </div>
        <div className="form-mail input-div">
          <input
            type="email"
            className="form-mail-input input-elem"
            placeholder="Correo"
            onChange={handleEmail}
            value={email}
          />
        </div>
      </div>
      <div className="register-form-button">
        <BaseButton>Enviar</BaseButton>
      </div>
    </form>
  );
}

export default RegisterForm;
