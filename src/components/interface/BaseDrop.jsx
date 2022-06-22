import React, { useState } from "react";

function BaseDrop({ name, description, icon, itemClick }) {
  const [show, setShow] = useState(false);
  // const [height, setHeight] = useState(false);

  function handleClick() {
    setShow(!show);
    // itemClick()
  }

  return (
    <div
      className="drop-container"
      // style={{ maxHeight: show ? "none" : "100px" }}
    >
      <div className="drop-name-container" onClick={handleClick}>
        <h3 className="drop-name">{name}</h3>
        <span className="drop-icon">
          <i className="fa-solid fa-angle-right"></i>
        </span>
      </div>
      {show && (
        <div className="drop-description-container">
          <p className="drop-description paragraph-text">{description}</p>
        </div>
      )}
    </div>
  );
}

export default BaseDrop;
