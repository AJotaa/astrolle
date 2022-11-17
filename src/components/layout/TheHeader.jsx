import React, { useState, useEffect } from "react";
import BaseButton from "../interface/BaseButton";
import { NavLink, Link } from "react-router-dom";
import BaseDropList from "../interface/BaseDropList";

function TheHeader() {
  const [width, setWidth] = useState(null);
  const [background, setBackground] = useState(null);
  const dataHeader = [
    {
      id: 1,
      title: "¿Qué es Tickea?",
      link: "/",
      class: "header-link-tickea",
    },
    {
      id: 2,
      title: "Buscar Eventos/ Citas/ Talleres",
      link: "/",
      class: "header-link-buscar",
    },
  ];

  const dataHeaderList = dataHeader.map((e) => {
    return (
      <li className="header-links-item" key={e.id}>
        <a href={e.link} className={e.class}>
          {e.title}
        </a>
      </li>
    );
  });

  useEffect(() => {
    handleWidth();
  });

  function handleWidth() {
    setWidth(window.innerWidth);
  }

  function changeBackground() {
    const scrollY = window.scrollY;

    if (scrollY === 0) {
      setBackground(null);
    } else {
      setBackground("active");
    }
  }

  window.addEventListener("scroll", changeBackground);

  if (width > 700) {
    return (
      <header id="the-header" className={background}>
        <nav className="nav-bar">
          <div className="header-logo">
            <NavLink to={"/"}>TICKEA</NavLink>
          </div>
          <div className="header-links">
            <ul className="header-links-list">{dataHeaderList}</ul>
          </div>
          <div className="header-buttons">
            <ul className="header-buttons-list">
              <li className="header-buttons-item">
                <Link to={"/product"}>
                  <BaseButton mode={"flat-small"}>Ingresa</BaseButton>
                </Link>
              </li>
              <li className="header-buttons-item">
                <Link to={"/product"}>
                  <BaseButton>Registra Mi Negocio</BaseButton>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header id="the-header-mobile" className={background}>
        <nav className="nav-mobile">
          <BaseDropList data={dataHeader} />
          <div className="mobile-logo-container">
            <span className="mobile-logo">
              <NavLink to={"/"}>TICKEA</NavLink>
            </span>
          </div>
          <div className="empty-div"></div>
        </nav>
      </header>
    );
  }
}

export default TheHeader;
