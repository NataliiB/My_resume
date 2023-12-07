import "./ReturnBtn.css";
import { Link, Outlet } from "react-router-dom";

export default function ReturnBtn(){
    return (
        <>
        <Link to="/"><button>Return</button></Link>
        
        </>
    )
}

