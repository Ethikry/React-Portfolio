import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <ul className="">
          <li className="ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0">
            <Link to="/">Ethan Gayton</Link>
          </li>
        </ul>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <ul>
            <li className="mr-5">
              <NavLink
                exact="true"
                to="/React-Portfolio/"
                className={(navData) =>
                  navData.isActive ? "font-bold text-white" : "none"
                }
              >
                About Me
              </NavLink>
            </li>
            <li className="mr-5">
              <NavLink
                to="/React-Portfolio/portfolio"
                className={(navData) =>
                  navData.isActive ? "font-bold text-white" : "none"
                }
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul>
          <li className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <NavLink
              to="/React-Portfolio/contact"
              className={(navData) =>
                navData.isActive ? "font-bold text-white" : "none"
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <NavLink
              to="/React-Portfolio/resume"
              className={(navData) =>
                navData.isActive ? "font-bold text-white" : "none"
              }
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
