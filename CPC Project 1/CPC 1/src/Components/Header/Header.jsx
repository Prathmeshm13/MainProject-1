import React from "react";
import "../../App.css"
import images from "./house-svgrepo-com (1).svg"
import img2 from ".//profile-circle-svgrepo-com (1).svg"
import "./head.css";
import {Link} from "react-router-dom";
function Header(){
    return(
    <>
        <div className="headcont">
        <Link to=""><div className="homelogo"><img src={images} height={45}/></div></Link>
        <div className="heading">Quizzo</div>
        <Link to="user"><div className="myprofile"><img src={img2} height={45}></img></div></Link>
        </div>
    </>
    )
}
export default Header;