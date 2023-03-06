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
        Ethan is a junior full stack web developer. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  );
}

export default About;
