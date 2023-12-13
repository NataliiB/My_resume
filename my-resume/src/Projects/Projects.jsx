
import React  from 'react';import "./Projects.css";
import { GoCrossReference } from "react-icons/go";
import ReturnBtn from "../ReturnBtn/ReturnBtn";
 export default function Projects(){
    return (
        <div className="projects">
         
        <h2>Projects</h2>
        <ul>
          <li>Careeraidd mentorship</li>
          
          <li><a href="https://github.com/NataliiB/My_resume" target='_blank'>Landing page <GoCrossReference /></a></li>
          <li><a href="https://github.com/NataliiB/JuniorTODO" target='_blank'>Junior ToDo app <GoCrossReference /></a></li>
        </ul>
      </div>
    )
 }