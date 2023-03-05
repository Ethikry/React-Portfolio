import React, { useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Portfolio.css";

function Portfolio({ projects }) {
    console.log(projects);
  const projectCards = projects.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        image={project.image}
        alt={project.alt}
        title={project.title}
        description={project.description}
        className={"card"}
      />
    );
  });

  useEffect(() => {
    const onMouseMove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
    document.getElementById("cards").addEventListener("mousemove", onMouseMove);
    return () => {
      document
        .getElementById("cards")
        .removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div id="cards">{projectCards}</div>;
}

export default Portfolio;
