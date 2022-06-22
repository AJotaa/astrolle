import React from "react";
import imageOne from "../../img/more-info-section/image_1.png";
import imageTwo from "../../img/more-info-section/image_2.png";
import imageThree from "../../img/more-info-section/image_3.png";

function MoreInfoSection() {
  const moreData = [
    {
      id: 1,
      img: imageOne,
      title: "Configuración",
      description: "Cómo comenzar con nosotros",
      link: "/",
    },
    {
      id: 2,
      img: imageTwo,
      title: "Seguridad",
      description: "Cómo proteger tus ventas",
      link: "/",
    },
    {
      id: 3,
      img: imageThree,
      title: "Aspectos económicos",
      description: "Nosotros nos encargamos!",
      link: "/",
    },
  ];

  const moreList = moreData.map((e) => {
    return (
      <li className="more-item" key={e.id}>
        <div className="more-img-container">
          <img src={e.img} alt="" className="more-img" />
        </div>
        <div className="more-text-container">
          <h4 className="more-text-title">{e.title}</h4>
          <span className="more-text-desciption paragraph-text">
            {e.description}
          </span>
          <span className="more-text-link">
            <a href={e.link} className="more-link">
              Más información
            </a>
          </span>
        </div>
      </li>
    );
  });

  return (
    <section className="more-info-section">
      <div className="more-info-container container">
        <div className="more-title-container">
          <h3 className="more-title title-text">Más información</h3>
        </div>
        <div className="more-list-container">
          <ul className="more-list">{moreList}</ul>
        </div>
      </div>
    </section>
  );
}

export default MoreInfoSection;
