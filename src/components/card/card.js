import React from "react";

import "./style.css";

const Card = ({ data = {} }) => {
  return (
    <div className="card">
      <div className="explore_problemContainerTxt">{data.name}</div>
      <button>
        <a href={data.url}>Solve Problem</a>
      </button>
    </div>
  );
};

export default Card;
