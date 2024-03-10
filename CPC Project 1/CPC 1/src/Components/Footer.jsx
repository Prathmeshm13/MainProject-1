import React from "react";
import "../App.css"
function Footer(){
    let k=new Date();
    let j=k.getFullYear();
    return(
    <>
        <h1 className="foot">Copyright {j} </h1>
    </>
    )
}
export default Footer;