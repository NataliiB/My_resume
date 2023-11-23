import Contacts from "../Contacts/Contacts";
import HardSkills from "../HardSkills/HardSkills";
import Projects from "../Projects/Projects";
import SoftSkills from "../SoftSkills/SoftSkills";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Natalia Bondarenko</h1>
      <ul>
        <li>
          <Link to="/my_hard_skills" className="hard-skills-btn">
            Hard skills
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/my_soft_skills" className="soft-skills-btn">
            Soft skills
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/my_projects" className="projects-btn">
            Projects
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/my_contacts" className="contacts-btn">
            Contacts
          </Link>
        </li>
      </ul>
      <Outlet/>

      <div className="hamburger-menu">
        <span></span>
      </div>
    </nav>
    /* <ul>
          <li>
            <Link to="/my_hard_skills">
              <a href="#" className="hard-skills-btn">
                Hard skills
              </a>
            </Link>
          </li> */
    /* <li>
            <Link to="/my_soft_skills">
              <a href="#" className="soft-skills-btn">
                Soft skills
              </a>
            </Link>
          </li>
          <li>
            <Link to="my_projects">
              <a href="#" className="projects-btn">
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link to="my_contacts">
              <a href="#" className="contacts-btn">
                Contacts
              </a>
            </Link>
          </li>
        </ul> */
  );
}
