import React from "react";
import "../../App.css"
import "./home.css"
import Card from "./Card";

function Home(){
    const cardid=[1,2,3,4,5];
    const carditem=[];
    for(let i=1;i<=5;i++){
        carditem.push(<Card/>);
    }
    return(
    <>
    <div className="middle">
    <div className="cards">
    {carditem}
    </div>
    </div>

    </>
    )
}
export default Home;