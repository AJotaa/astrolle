import React from "react";
import infoHands from "../../img/info-section/info-hands.png";
import infoMug from "../../img/info-section/info-mug.png";
import infoGlasses from "../../img/info-section/info-glasses.png";

function InfoSection() {
  const infoImages = [
    {
      id: 1,
      title: "Todo lo que necesitas para empezar",
      paragraph:
        "Tenemos una plataforma que es sencilla de usar, dejanos preocuparnos por tu tecnología.",
      description: "manos sosteniendo luces",
      image: infoHands,
    },
    {
      id: 2,
      title: "Trabajamos con tu imagen",
      paragraph:
        "Nuestro potencial se encuentra en ayudarte a tener una mejor imagen en internet y que puedas llegar a mayor cantidad de clientes..",
      description: "manos sosteniendo una taza",
      image: infoMug,
    },
    {
      id: 3,
      title: "Automatizaciones, Soporte y PosVenta",
      paragraph:
        "Automatizar es la  manera de lograr una mejor relación con tus clientes, ellos te lo agradecerán.",
      description: "escritorio con lentes",
      image: infoGlasses,
    },
  ];

  const imageListItems = infoImages.map((i) => {
    return (
      <li className="info-image-item" key={i.id}>
        <img src={i.image} alt={i.description} className="info-image" />
        <div className="info-image-text">
          <h3 className="info-image-title title-text">{i.title}</h3>
          <p className="info-image-paragraph paragraph-text">{i.paragraph}</p>
        </div>
      </li>
    );
  });

  return (
    <section className="info-section">
      <div className="info-container">
        <div className="info-text-container">
          <div className="info-title-container">
            <h2 className="info-title title-text">
              Las personas prefieren reservar sin presiones
            </h2>
          </div>
          <div className="info-paragraph-container">
            <p className="info-paragraph paragraph-text">
              Hemos entendido que realizar una reservación a través de internet
              hace que las personas se sientan más comoda a la hora de reservar,
              queremos ayudarte a organizar tu agenda aprovechando lo mejor de
              la tecnología.
            </p>
          </div>
        </div>
        <div className="info-images-container">
          <ul className="info-images-list">{imageListItems}</ul>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
