import React from "react";

function BaseButton({ mode, children, onclick }) {

  if (mode === "big") {
    return (
      <div className="btn-container">
        <button className="big-btn btn">{children}</button>
      </div>
    );
  } else if (mode === "flat") {
    return (
      <div className="btn-container">
        <button className="flat-btn btn">{children}</button>
      </div>
    );
  } else if (mode === "flat-small") {
    return (
      <div className="btn-container">
        <button className="flat-small-btn btn">{children}</button>
      </div>
    );
  } else if (mode === "btn-control") {
    return (
      <div className="btn-container">
        <button className="control-btn btn" onClick={onclick}>{children}</button>
      </div>
    );
  } else {
    return (
      <div className="btn-container">
        <button className="standard-btn btn">{children}</button>
      </div>
    );
  }
}

export default BaseButton;
