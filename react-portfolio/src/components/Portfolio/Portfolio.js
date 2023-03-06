import React, { useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Portfolio.css";

function Portfolio({ projects }) {
  const projectCards = projects.map((project) => {
    return (
      <div>
        <a href={project.link}>
          <ProjectCard
            key={project.id}
            image={project.image}
            alt={project.alt}
            title={project.title}
            description={project.description}
          />
        </a>
        <a href={project.repoLink} className="flex p-2">
          <img
            className="flex"
            src="https://user-images.githubusercontent.com/113566829/223079664-ccaca5b6-af72-4371-a1e3-59f2f7f2b08d.png"
            alt="github logo"
            width="40px"
          />
          <p className="flex p-2">Github repo for {project.title}</p>
        </a>
      </div>
    );
  });

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     for (const card of document.getElementsByClassName("card")) {
  //       const rect = card.getBoundingClientRect(),
  //         x = e.clientX - rect.left,
  //         y = e.clientY - rect.top;

  //       card.style.setProperty("--mouse-x", `${x}px`);
  //       card.style.setProperty("--mouse-y", `${y}px`);
  //     }
  //   };
  //   document.getElementById("cards").addEventListener("mousemove", onMouseMove);
  //   return () => {
  //     document
  //       .getElementById("cards")
  //       .removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  return (
    <div className="section grid grid-cols-5 gap-4 py-4">
      <div className="col-start-2 col-span-3">
        <div className="text-3xl text-center">Portfolio</div>
      </div>
      <div className="col-start-2 col-span-3 items-center">
        <div id="cards" className="">
          {projectCards}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
