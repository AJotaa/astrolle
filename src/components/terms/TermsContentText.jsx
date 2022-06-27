import React, { Fragment } from "react";
import TermsContentList from "./TermsContentList";

function TermsContentText({ termsData }) {
  return (
    <div className="terms-info-text-container">
      <TermsContentList type="terms" termsData={termsData} />

      <Fragment>
        <h1 className="terms-text-section-title title-text">Politicas</h1>
        <TermsContentList type="politics" termsData={termsData} />
      </Fragment>

      <Fragment>
        <h1 className="terms-text-section-title title-text">
          Politicas de compra
        </h1>
        <TermsContentList type="politics-buy" termsData={termsData} />
      </Fragment>
    </div>
  );
}

export default TermsContentText;
