import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { GiEcology } from "react-icons/gi";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function Navbar(props) {
  const [isActive, setIsActive] = useState(false);
  const [isPushed, setIsPushed] = useState(true);
  // let hamburgerDesign = "hamburger-menu"
  // if(!isPushed){hamburgerDesign="hamburger-menu"}else if (!props.hidingBurger){hamburgerDesign="hamburger-menu hided"}else {hamburgerDesign="hamburger-menu"}

  return (
    <>
      <h1>
        <GiEcology />
        Natalia Bondarenko
      </h1>
      <nav className="navbar">
        <ul>
          <li>
            {" "}
            <Link to="/">
              <button
                onClick={() => {
                  setIsActive(false);
                }}
                className={isActive ? "contacts-btn" : "contacts-btn-block"}
              >
                Main page
              </button>
            </Link>
          </li>
          <li>
            <Link to="/my_hard_skills">
              <button
                onClick={() => {
                  setIsActive(true);
                }}
                className="hard-skills-btn"
              >
                Hard skills
              </button>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/my_soft_skills" className="soft-skills-btn">
              <button
                onClick={() => {
                  setIsActive(true);
                }}
              >
                Soft skills
              </button>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/projects" className="projects-btn">
              <button
                onClick={() => {
                  setIsActive(true);
                }}
              >
                Projects
              </button>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/my_contacts" className="contacts-btn">
              <button
                onClick={() => {
                  setIsActive(true);
                }}
              >
                Contacts
              </button>
            </Link>
          </li>
        </ul>
        <HamburgerMenu
          pageWrapId={props.pageWrapId}
          outerContainerId={props.outerContainerId}
        />
      </nav>
    </>
  );
}
