import "./Projects.css";
import ReturnBtn from "../ReturnBtn/ReturnBtn";
 export default function Projects(){
    return (
        <div className="projects">
          <ReturnBtn/>
        <h2>Projects</h2>
        <ul>
          <li><a href="#">Landing page</a></li>
          <li><a href="#">Junior ToDo app</a></li>
          <li><a href="#">Careeraidd mentorship</a></li>
        </ul>
      </div>
    )
 }