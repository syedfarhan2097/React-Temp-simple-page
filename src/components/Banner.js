import React, { useEffect, useState } from 'react';
import "./Banner.css";
const Banner = (props) => {
  const [counter, setCounter] = useState(0);
  const [clr, setClr] = useState('black');
 useEffect(() => {
    if(counter < 0){
      setClr("red");
    }else{
      setClr("green");
    }
  },[counter]);

  return (
    <div className="banner-bg-main">
      <h5>{props.text_1}</h5>
      <h2 style={{color:clr}}>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)} >Increment</button>
      <button onClick={() => setCounter(counter - 1)} >Decerment</button>
      <p className="span_link">{props.link}</p>
      <span className="span_discription">{props.discription}</span>
    </div>  
  );  
};

export default Banner;
