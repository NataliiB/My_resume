import React from "react";
import { useState } from "react";
import "./HamburgerMenu.css";
import { Link, Outlet } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default function HamburgerMenu(props) {
  return (
    <>
      <div >
        <Menu  pageWrapId={props.pageWrapId} outerContainerId={props.outerContainerId}  right>
          
            <ul className="hamburger-list">
              <li>
                {" "}
                <Link to="/">
                  <button className="skills-btn">Main page</button>
                </Link>
              </li>
              <li>
                <Link to="/my_hard_skills">
                  <button className="skills-btn">Hard skills</button>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/my_soft_skills">
                  <button  className="skills-btn">Soft skills</button>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/projects">
                  <button className="skills-btn">Projects</button>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/my_contacts">
                  <button  className="skills-btn">Contacts</button>
                </Link>
              </li>
            </ul>
          
        </Menu>
      </div>
    </>
  );
}
