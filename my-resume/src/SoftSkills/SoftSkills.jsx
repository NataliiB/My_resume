import "./Softskills.css";
import ReturnBtn from "../ReturnBtn/ReturnBtn";

export default function SoftSkills(){
    return(
        <div className="soft-skills">
          <ReturnBtn/>
          <h2>Soft skills</h2>
          <ul>
            <li>Hard-working</li>
            <li>Creative</li>
            <li>Attentive</li>
            <li>Сurious</li>
            <li>Кesponsible</li>
            <li>Friendly</li>
          </ul>
        </div>
    )
}