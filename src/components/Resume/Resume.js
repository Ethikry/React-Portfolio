import React from "react";
import ResumeDoc from "./resume.txt";

function Resume() {
  return (
    <div className="section grid grid-cols-8 gap-4 mt-4">
      <div className="col-start-4 col-span-2 items-center">
        <h2 className="text-3xl text-center">Resume</h2>
      </div>
      <div className="col-start-4 col-span-2 items-center">
        <p>
          Please download my resume file attached below to see a list of
          relevant skills. A brief summary:
          <ul>
            <li>
              Making awesome react applications, like this one you're seeing
              now!
            </li>
          </ul>
          <ul>
            <li>Working hard.</li>
          </ul>
          <ul>
            <li>A lot of other things.</li>
          </ul>
        </p>
        <a
          href={ResumeDoc}
          download="Ethan_Resume"
          target="_blank"
          rel="noreferrer"
          className="items-center text-center"
        >
          <button className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            My Resume File
          </button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
