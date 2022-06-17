import React from "react";

function BackDecoration({ children }) {
  return (
    <div className="back-decoration-container">
      <div className="back-decoration"></div>
      {children}
    </div>
  );
}

export default BackDecoration;
