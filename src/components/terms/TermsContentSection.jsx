import React from "react";
import TermsContentNav from "./TermsContentNav";
import TermsContentText from "./TermsContentText";

function TermsContentSection({ termsData }) {
  return (
    <section className="terms-content-section">
      <div className="terms-content-container">
        <div className="terms-content-title-container">
          <h1 className="terms-content-title title-text">
            Terminos & Condiciones
          </h1>
        </div>
        <div className="terms-content-info-container">
          <TermsContentNav termsData={termsData} />
          <TermsContentText termsData={termsData} />
        </div>
      </div>
    </section>
  );
}

export default TermsContentSection;
