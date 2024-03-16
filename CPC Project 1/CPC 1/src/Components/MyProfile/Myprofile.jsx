import React from "react";
import "../../App.css"
import "./myprofile.css"
import usedetail, { Detprovider } from "../../contexts/detailcontext";
function Myprofile(){
    const {username}=usedetail();
    return(
    <>
    <div className="middle">
        <div className="profilecard">
        <h1>Welcome Mr {username}</h1>
        </div>
    </div>
    </>
    )
}
export default Myprofile;