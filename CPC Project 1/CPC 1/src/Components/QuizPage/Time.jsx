import React from "react";
import usecount from "./Countlogic";
function Time(){
    const target=Number(new Date().getTime())+80000;
    const [hours,minutes,seconds]=usecount(target);
    if(hours+seconds+minutes>=0){
    return(
        <>
            <div className="time"><h2><span style={{color:"black"}}>Time:</span><span style={(hours==0 && minutes==0 && seconds<60)?{color:"red"}:{color:"white"}}>{hours}:{minutes}:{seconds}</span></h2></div>
        </>
    )
    }
    else{
        return(
            <>
            <div className="time"><h2>Time's Up</h2></div>
            </>
        )
    }
}
export default Time;