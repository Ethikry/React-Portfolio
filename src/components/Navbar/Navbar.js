import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-400">
        <ul className="">
          <li className="ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0">
            <Link to="/">Ethan Gayton</Link>
          </li>
        </ul>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <ul>
            <li className="mr-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 ${
                    isActive
                      ? "font-bold text-white underline-none"
                      : "hover:underline"
                  }`
                }
              >
                About Me
              </NavLink>
            </li>

            <li className="mr-5">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `px-4 ${
                    isActive
                      ? "font-bold text-white underline-none"
                      : "hover:underline"
                  }`
                }
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul>
          <li className="inline-flex items-center">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 ${
                  isActive
                    ? "font-bold text-white bg-none"
                    : "hover:bg-slate-700 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="inline-flex items-center">
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `px-4 ${
                  isActive
                    ? "font-bold text-white bg-none"
                    : "hover:bg-slate-700 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
                }`
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
