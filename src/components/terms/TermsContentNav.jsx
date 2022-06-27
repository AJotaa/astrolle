import React from "react";

function TermsContentNav({ termsData }) {
  const termsLinksList = termsData.map((e) => {
    return (
      <li className="terms-nav-item" key={e.id}>
        <a href={`#${e.id}`} className="terms-nav-link">
          {e.title}
        </a>
      </li>
    );
  });

  return (
    <div className="terms-nav-container">
      <div className="terms-nav-title-container">
        <span className="terms-nav-icon">|</span>
        <h3 className="terms-nav-title title-text">Términos y políticas</h3>
      </div>
      <ul className="terms-nav-list">{termsLinksList}</ul>
    </div>
  );
}

export default TermsContentNav;
