import React from "react";

function AboutSection() {
  const aboutData = [
    {
      id: 1,
      icon: "fa-regular fa-circle-check",
      header: "Tú decides lo que cobras",
      paragraph: `Nosotros estamos del lado de tus necesidades y las de tu
      negocio, tenemos herramientas que te ayudarán a sincronizarte
      con la demanda en tu zona.`,
    },
    {
      id: 2,
      icon: "fa-regular fa-circle-check",
      header: "Posicionamos tu marca en el mercado",
      paragraph: `Te ayudamos en todo lo que necesites para que tengas una llegada
      a una mayor cantidad de posibles clientes.`,
    },
    {
      id: 3,
      icon: "fa-regular fa-circle-check",
      header: "Puedes crear reservaciones para tu evento o para tu negocio",
      paragraph: `Olvidate de los complicados sistemas de reservaciones, lo
      hicimos simple para que te enamores de nuestro servicio y tu
      enamores a tus clientes con el tuyo.`,
    },
  ];

  const aboutItems = aboutData.map((e) => {
    return (
      <li className="about-item" key={e.id}>
        <span className="about-item-icon"><i className={e.icon}></i></span>
        <h3 className="about-item-header title-text">{e.header}</h3>
        <p className="about-item-paragraph paragraph-text">{e.paragraph}</p>
      </li>
    );
  });

  return (
    <section className="about-section">
      <div className="about-container container">
        <div className="about-title-container">
          <h2 className="about-title-header title-text">Conoce Tickea</h2>
          <p className="about-title-paragraph paragraph-text">
            ¡Te damos la bienvenida a tu futuro en internet! Vayas a donde
            vayas, tendras a tickea como aliado para tu negocio
          </p>
        </div>
        <div className="about-list-container">
          <ul className="about-list">{aboutItems}</ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
