import React from "react";

function About() {
  return (
    <div className="section grid grid-cols-8 gap-4 mt-4">
      <div className="col-start-4 col-span-2 items-center">
        <h2 className="text-3xl text-center">About Me</h2>
      </div>
      <div className="container col-end-5 col-span-2 ">
        <img
          src="https://user-images.githubusercontent.com/113566829/223157241-35b46137-e525-4981-a422-487fe46263ab.png"
          width="900px"
          alt="portrait"
        ></img>
      </div>
      <div className="container col-start-5 col-span-2 flex items-center">
        Hi, I'm Ethan. I'm a creative person and very passionate about the work
        I do, such as crafting user-friendly designs and developing engaging web
        apps. Feel free to explore my portfolio to see some of my work in
        action. If you're looking for help with your next project or just want
        to chat about web development, games, or travel, let's connect!
      </div>
    </div>
  );
}

export default About;
