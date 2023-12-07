import Navbar from "./Navbar/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HardSkills from "./HardSkills/HardSkills";
import SoftSkills from "./SoftSkills/SoftSkills";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import MainContent from "./MainContent/MainContent";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { useState } from "react";


function App() {
  const [hidingBurger, setHidingBurger] = useState(true)
  return (
    <>
      <Routes>
        <Route path="/my_hard_skills" element={<HardSkills />} />
        <Route path="/my_soft_skills" element={<SoftSkills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/my_contacts" element={<Contacts />} />
        <Route path="/" element={<MainContent/>}/>
        <Route path="/menu" element={<HamburgerMenu setHidingBurger={setHidingBurger}/>}/>
      </Routes>

      <div className="container">
        <div className="row">
          <Navbar hidingBurger={hidingBurger}/>
          {console.log(hidingBurger)}
        </div>
      </div>
    </>
  );
}

export default App;
