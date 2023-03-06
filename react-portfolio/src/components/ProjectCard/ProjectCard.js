import React from "react";
import "./ProjectCard.css";

function ProjectCard({ image, alt, title, description, }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image">
          <img src={image} alt={alt} />
        </div>
        <div className="card-info-wrapper">
          <div className="card-info">
            <div className="card-info-title">
              <h3>{title}</h3>
              <h4>{description}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
