import React from "react";
import BaseButton from "../interface/BaseButton";

function TheHeader() {
  return (
    <header id="the-header">
      <nav className="nav-bar">
        <div className="header-logo">TICKEA</div>
        <div className="header-links">
          <ul className="header-links-list">
            <li className="header-links-item">
              <a href="https/" className="header-link-tickea">
                ¿Qué es Tickea?
              </a>
            </li>
            <li className="header-links-item">
              <a href="https/" className="header-link-buscar">
                Buscar Eventos/Citas/Talleres
              </a>
            </li>
          </ul>
        </div>
        <div className="header-buttons">
          <ul className="header-buttons-list">
            <li className="header-buttons-item">
              <BaseButton mode={"flat-small"}>Ingresa</BaseButton>
            </li>
            <li className="header-buttons-item">
              <BaseButton>Registra Mi Negocio</BaseButton>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default TheHeader;
