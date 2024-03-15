import React from "react";
import "../../App.css"
import  "./home.css";
import {Link} from "react-router-dom";
function Card(){
    return(
        <>
            <div className="card">
                <h2>Aptitude</h2>
                <h2>Total Questions:</h2>
                <h2>Maximum Score:</h2>
                <h2>Duration:</h2>
                <h2>Difficulty:</h2>
                <Link to="quiz"><button className="but">Start Quiz</button></Link>
            </div>
        </>
    )
}
export default Card;