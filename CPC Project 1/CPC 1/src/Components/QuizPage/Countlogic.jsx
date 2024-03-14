import React, { useEffect, useState } from "react";
function usecount(props){
    const [countdown,setcountown]=useState(
       props-new Date().getTime()
    );
    useEffect(()=>{
        const interval=setInterval(()=>{
            setcountown(prevcount=>prevcount-1000);
        },1000)
        return ()=>clearInterval(interval);
    }
    ,[props]);
    return getval(countdown);
}
function getval(countdown){
    const hours=Math.floor((countdown%(1000*60*60*24))/(1000*60*60));
    const minutes=Math.floor((countdown%(1000*60*60))/(1000*60));
    const seconds=Math.floor((countdown%(1000*60))/(1000));
    return [hours,minutes,seconds];
}
export default usecount;
