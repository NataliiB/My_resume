import Navbar from "./Navbar/Navbar";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import HardSkills from "./HardSkills/HardSkills";
import SoftSkills from "./SoftSkills/SoftSkills";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/my_hard_skills" element={<HardSkills/>}/>

          <Route path="/my_soft_skills" element={<SoftSkills/>}/>
          <Route path="/my_projects" element={<Projects/>}/>
          <Route path="/my_contacts" element={<Contacts/>}/>
        </Routes>
      
      <div className="container">
        <div className="row">
          <Navbar />
          <div className="content">
            <h1>Frontent development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              aspernatur corporis maiores ipsum.
            </p>
            <a href="#">Send message</a>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
