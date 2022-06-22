import React from "react";

function LinksSection() {
  const linksData = [
    {
      id: 1,
      name: "Centro de Ayuda",
      link: "/",
    },
    {
      id: 2,
      name: "Términos y políticas",
      link: "/",
    },
    {
      id: 3,
      name: "Términos & Condiciones",
      link: "/",
    },
  ];

  const linksList = linksData.map((e, i) => {
    return (
      <il className="links-section-item" key={e.id}>
        <a href={e.link} className="links-section-link">
          {e.name}
        </a>
        {i < linksData.length - 1 && (
          <span className="links-section-icon">
            <i class="fa-solid fa-chevron-right"></i>
          </span>
        )}
      </il>
    );
  });

  return (
    <section className="links-section page-top">
      <div className="links-section-container">
        <ul className="links-section-list">{linksList}</ul>
      </div>
    </section>
  );
}

export default LinksSection;
