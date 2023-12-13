import React from "react";
import Navbar from "./Navbar/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HardSkills from "./HardSkills/HardSkills";
import SoftSkills from "./SoftSkills/SoftSkills";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import MainContent from "./MainContent/MainContent";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

function App() {
  return (
    <>
      <div id="outer-container">
        <div id="page-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/my_hard_skills" element={<HardSkills />} />
            <Route path="/my_soft_skills" element={<SoftSkills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/my_contacts" element={<Contacts />} />
            <Route path="/menu" element={<HamburgerMenu />} />
          </Routes>

          <div className="container">
            <div className="row">
              <Navbar />
              <HamburgerMenu
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
