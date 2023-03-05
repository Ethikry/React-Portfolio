import React from "react";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";

import "./App.css";

function App() {
  const projects = [
    {
      id: 1,
      image:
        "https://www.freepnglogos.com/uploads/play-button-png/circular-play-button-svg-png-icon-download-onlinewebfontsm-30.png",
      alt: "Play button 1",
      title: "Project 1",
      subtitle: "Description of project 1",
    },
    {
      id: 2,
      image:
        "https://www.freepnglogos.com/uploads/play-button-png/circular-play-button-svg-png-icon-download-onlinewebfontsm-30.png",
      alt: "Play button 2",
      title: "Project 2",
      subtitle: "Description of project 2",
    },
  ];

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Portfolio projects={projects} />
      <Contact />
      <Resume />
    </main>
  );
}

export default App;
