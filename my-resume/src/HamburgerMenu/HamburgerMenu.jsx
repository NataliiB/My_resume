import { useState } from "react";
import "./HamburgerMenu.css";
import { Link, Outlet } from "react-router-dom";
export default function HamburgerMenu(props) {


  return (
    <>
      <nav className="navbarColumn">
        <ul>
          <li>
            {" "}
            <Link to="/">
              <button onClick={()=>{props.setHidingBurger(false)}}>Main page</button>
            </Link>
          </li>
          <li>
            <Link to="/my_hard_skills">
              <button onClick={()=>{props.setHidingBurger(false)}}>
                Hard skills
              </button>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/my_soft_skills" className="soft-skills-btn">
              <button onClick={()=>{props.setHidingBurger(false)}}>
                Soft skills
              </button>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/projects" className="projects-btn">
              <button onClick={()=>{props.setHidingBurger(false)}}>
                Projects
              </button>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/my_contacts" className="contacts-btn">
              <button onClick={()=>{props.setHidingBurger(false)}}>
                Contacts
              </button>
            </Link>
          </li>
        </ul>

        <Outlet />
      </nav>

      
      
    </>
  );
}
