import React from "react";

function TermsContentList({ termsData, type }) {
  const termsList = termsData
    .filter((e) => e.type === type)
    .map((e) => {
      return (
        <li className="terms-text-item" id={e.id} key={e.id}>
          <h2 className="terms-text-title title-text">{e.title}</h2>
          <p
            className="terms-text-paragraph paragraph-text"
            dangerouslySetInnerHTML={{ __html: e.text }}
          ></p>
        </li>
      );
    });
  return <ul className="terms-text-terms-list">{termsList}</ul>;
}

export default TermsContentList;
