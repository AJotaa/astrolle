import React from "react";

function DotsDecoration({ classLocation }) {
  const n = 70;

  const dotsToDom = [...Array(n)].map((_, i) => {
    return <span key={i}>+</span>;
  });
  return (
    <div className={`features-dots-decoration ${classLocation}`}>
      {dotsToDom}
    </div>
  );
}

export default DotsDecoration;
