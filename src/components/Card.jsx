// src/components/Card.js
import React from "react";

const Card = ({ title, imageSrc, altText, content }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img src={imageSrc} alt={altText} style={{ maxHeight: "200px" }} />
      <div className="card-content">
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </div>
  );
};

export default Card;
