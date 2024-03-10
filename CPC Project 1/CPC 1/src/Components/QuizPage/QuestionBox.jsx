import React, { useState } from "react";
import "../../App.css";

function QuestionBox(props) {
  const [bgColors, setBgColors] = useState(Array(props.opt.length).fill(''));
  const [done, setdone]=useState(false);
  const handleOptionClick = (index) => {
    if(done==true){return};
    const newBgColors = [...bgColors];
    if(String(props.ans)==String(props.opt[index])){
  newBgColors[index] = ' #00FF00';
  props.scfunc(4);
    }
    else{
        newBgColors[index] = 'red';
        props.scfunc(-1);
    }
    setBgColors(newBgColors); 
    setdone(true);
  };

  const options = props.opt;
  const optItems = options.map((oitem, index) => (
    <>
      <div className="gap2" key={`gap-${index}`}></div>
      <div
        style={{ backgroundColor: bgColors[index] }}
        className="singleop"
        key={`option-${index}`}
        onClick={() => handleOptionClick(index)}
      >
        <h2>{oitem}</h2>
      </div>
      <div className="gap2" key={`gap2-${index}`}></div>
    </>
  ));

  return (
    <>
      <div className="mainBox">
        <div className="questionBox">
          <h2>Q.{props.id}) {props.qcontent}</h2>
        </div>
        <div className="optionBox">{optItems}</div>
      </div>
    </>
  );
}

export default QuestionBox;
