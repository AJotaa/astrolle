import React, { useState, Fragment } from "react";

function BaseDropList({ data }) {
  const [active, setActive] = useState(false);
  function handleActive() {
    setActive(!active);
  }

  const dataList = data.map((e) => {
    return (
      <li className="drop-item">
        <a href={e.link} className={e.class}>
          {e.title}
        </a>
      </li>
    );
  });

  return (
    <Fragment>
      <div className="drop-container">
        <span className="drop-icon" onClick={handleActive}>
          <i className="fa-solid fa-bars-staggered"></i>
        </span>
        {active && (
          <div className="drop-list-container">
            <ul className="drop-list">{dataList}</ul>
          </div>
        )}
      </div>
      {active && <div className="back-drop" onClick={handleActive}></div>}
    </Fragment>
  );
}

export default BaseDropList;
