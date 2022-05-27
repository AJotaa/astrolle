import React from "react";

function TheFooter() {
  const optionsData = [
    {
      id: 1,
      name: "Company",
      link: "/",
    },
    {
      id: 2,
      name: "Politica de privacidad",
      link: "/",
    },
    {
      id: 3,
      name: "Soporte",
      link: "/",
    },
    {
      id: 4,
      name: "Términos del servicios para empresas, agencias y freelancers",
      link: "/",
    },
    {
      id: 5,
      name: "Politica de manejo de datos",
      link: "/",
    },
    {
      id: 6,
      name: "Contacto",
      link: "/",
    },
    {
      id: 7,
      name: "Terminos legales para compradores",
      link: "/",
    },
    {
      id: 8,
      name: "Branding",
      link: "/",
    },
    {
      id: 9,
      name: "FAQs",
      link: "/",
    },
  ];

  const socialData = [
    {
      id: 1,
      name: "facebook",
      link: "/",
      icon: "fa-brands fa-facebook-f",
    },
    {
      id: 2,
      name: "linkedin",
      link: "/",
      icon: "fa-brands fa-linkedin-in",
    },
    {
      id: 3,
      name: "tiktok",
      link: "/",
      icon: "fa-brands fa-tiktok",
    },
  ];

  const footerOptions = optionsData.map((e) => {
    return (
      <li key={e.id} className="footer-options-item">
        <a href={e.link} className="options-item">
          {e.name}
        </a>
      </li>
    );
  });

  const footerSocial = socialData.map((e) => {
    return (
      <li key={e.id} className="footer-social-item">
        <a href={e.link} className="social-link">
          <i className={e.icon}></i>
        </a>
      </li>
    );
  });

  return (
    <footer id="the-footer">
      <div className="footer-container">
        <div className="footer-title-container">
          <h4 className="footer-title">TICKEA</h4>
          <span className="footer-description">
            Hacemos mucho más que solo vender tickets
          </span>
        </div>
        <div className="footer-options-container">
          <ul className="footer-options-list">{footerOptions}</ul>
          <form className="footer-options-form">
            <label className="footer-form-title" name="email">
              Subscribe to our newsletter
            </label>
            <div className="footer-input-container">
              <input type="text" className="footer-form-input" name="email" />
              <button className="footer-form-btn">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="footer-rights-social">
          <div></div>
          <div className="footer-rights-container">
            <span className="footer-rights">
              © Copyright 2020 Tickea. All Rights Reserved
            </span>
          </div>
          <div className="footer-social-container">
            <ul className="footer-social-list">{footerSocial}</ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default TheFooter;
