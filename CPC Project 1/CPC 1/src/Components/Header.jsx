import React from "react";
import "../App.css"
import images from "./house-svgrepo-com (1).svg"
import img2 from ".//profile-circle-svgrepo-com (1).svg"
function Header(){
    return(
    <>
        <div className="headcont">
        <div className="homelogo"><img src={images} height={45}/></div>
        <div className="heading">Quizzo</div>
        <div className="myprofile"><img src={img2} height={45}></img></div>
        </div>
    </>
    )
}
export default Header;