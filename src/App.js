import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume.js";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const projects = [
    {
      id: 1,
      image:
        "https://user-images.githubusercontent.com/113566829/222939574-bc52c0ca-9b87-45f0-aa4d-dd442371add3.png",
      alt: "CMS Blog image",
      title: "CMS Blog",
      description: "A cms-style blog site",
      link: "https://cms-blog-ethikry.herokuapp.com/",
      repoLink: "https://github.com/Ethikry",
    },
    {
      id: 2,
      image:
        "https://user-images.githubusercontent.com/113566829/222938133-580a8bb1-eadc-42f6-86c9-4bce3579fec7.png",
      alt: "Note-Taker image",
      title: "Note Taker",
      description: "A note taking app",
      link: "https://rocky-bastion-04509.herokuapp.com/",
      repoLink: "https://github.com/Ethikry",
    },
    {
      id: 3,
      image:
        "https://user-images.githubusercontent.com/113566829/221410517-fb8d63fb-e21e-4385-bfda-bf2845c529ed.png",
      alt: "Project 3",
      title: "Weather Forecast",
      description: "5-Day Weather Forecast Dashboard",
      link: "https://ethikry.github.io/WeatherDashboard-c6/",
      repoLink: "https://github.com/Ethikry/WeatherDashboard-c6",
    },
    {
      id: 4,
      image:
        "https://user-images.githubusercontent.com/113566829/223172994-4941443d-d9f1-44be-a1f8-60c1c45698d3.png",
      alt: "Project 4",
      title: "Social Network API",
      description: "Backend for a social network",
      link: "https://github.com/Ethikry/Social_NetworkAPI-c18",
      repoLink: "https://github.com/Ethikry/Social_NetworkAPI-c18",
    },
    {
      id: 5,
      image:
        "https://user-images.githubusercontent.com/113566829/221409595-d803ec83-52c9-48ec-b2f7-b2074f724d46.png",
      alt: "Project 5",
      title: "Code Quiz",
      description: "Coding Quiz with a leader board",
      link: "https://ethikry.github.io/Scoreboard-c4/",
      repoLink: "https://github.com/Ethikry/Scoreboard-c4",
    },
    {
      id: 6,
      image:
        "https://www.freepnglogos.com/uploads/play-button-png/circular-play-button-svg-png-icon-download-onlinewebfontsm-30.png",
      alt: "Project 6",
      title: "To be announced",
      description: "Check back soon!",
      link: "https://github.com/Ethikry",
      repoLink: "https://github.com/Ethikry",
    },
  ];

  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 body-font h-screen justify-between">
        <Navbar />
        <Routes>
          <Route exact path="/React-Portfolio/" element={<About />} />
          <Route
            path="/portfolio"
            element={<Portfolio projects={projects} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
