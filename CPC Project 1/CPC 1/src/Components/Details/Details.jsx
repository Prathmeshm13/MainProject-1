import React, { useState } from "react";
import "./detail.css"
import { Detprovider } from "../../contexts/detailcontext";
import Myprofile from "../MyProfile/Myprofile";
function Details(){
    const [username,setusername]=useState("guest");
    const handleSubmit=(e)=>{
        e.preventDefault();
        setusername(username);
    }
    return(
        <>
        <Detprovider value={{username}}>
        <div className="detailcard">
            <h1>Explore Quizes</h1>
            <h2>Name:</h2>
            <input value={username} type="text" placeholder="Preffered Name" onChange={(e)=>(setusername(e.target.value))}/>
            <button className="but" onClick={handleSubmit}>Submit</button>
        </div>
        </Detprovider>
        </>
    )
}
export default Details;