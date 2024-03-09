import React, { useState } from "react"
import Purple from "./Purple";
 


const Semaforo = () => {
const [color, setColor] = useState("none");
  
   const changeColor = () => {
    const colors = ["red", "yellow", "green"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    };


    return(
    <div className="trafficLight">
        <div className="d-flex">
            <div className= "container mt-5">
            <Purple/>
                <div onClick={() => setColor("red")} className= {`redLight ${color === "red" ? "glow" : " "}`}></div> 
                <div onClick={() => setColor("yellow")} className= {`yellowLight ${color === "yellow" ? "glow" : " "}`}></div>  
                <div onClick={() => setColor("green")} className= {`greenLight ${color === "green" ? "glow" : " "}`}></div>  
               
            </div>
           
        </div>
        <div className="switch-button">
                <button onClick={changeColor} className="btn btn-white rounded-pill border border-4 border-danger fw-bold mb-3">Click here to switch</button>
        </div>
    </div>
    )
}

export default Semaforo