import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Particle(prop){
    function generatePlot(vertice){
        switch(vertice){
            case 0: return (Math.floor(Math.random() * 25)+"% ")+(Math.floor(Math.random() * 25)+"% ");
            case 1: return (Math.floor(Math.random() * (100-75)+75)+"% ")+(Math.floor(Math.random() * 25)+"% ");
            case 2: return (Math.floor(Math.random() * (100-75)+75)+"% ")+(Math.floor(Math.random() * (100-75)+75)+"% ");
            case 3: return (Math.floor(Math.random() * 25)+"% ")+(Math.floor(Math.random() * (100-75)+75)+"% ");
        }
    }
    function generatePlotAxis(side){
        switch(side){
            case 0: return (Math.floor(Math.random() * 25)+"% ")+(Math.floor(Math.random() * (75-25)+25)+"% ");
            case 1: return (Math.floor(Math.random() * (75-25)+25)+"% ")+(Math.floor(Math.random() * 25)+"% ");
            case 2: return (Math.floor(Math.random() * (100-75)+75)+"% ")+(Math.floor(Math.random() * (75-25)+25)+"% ");
            case 3: return (Math.floor(Math.random() * (75-25)+25)+"% ")+(Math.floor(Math.random() * (100-75)+75)+"% ");
        }
    }
    const [plotArray, setPlotArray] = useState([]);
    const [startFlag, setStartFlag] = useState(false);
    useEffect(()=>{
        if(!startFlag){
            setStartFlag(true); 
        } else {
            setInterval(()=>{
                let newPlotArray = [];
                for(let i=0; i<4; i++){
                    if(Boolean.random){
                        newPlotArray.push(generatePlot(i));
                    } else {
                        newPlotArray.push(generatePlotAxis(i));
                    }
                }
                gsap.to(".particles", {clipPath: "polygon("+newPlotArray.join(", ")+")", duration: 0.1, ease: "power1.inOut"});
            }, 600)
        }
    },[startFlag]);
    return(
        <div style={{filter: "blur(2px) hue-rotate(90deg) saturate(1.5) drop-shadow(0rem 0rem 10px rgb(0, 0, 0))"}}>
            <div className="particles" style={{
                height:""+prop.scale*5+"rem",
                width:""+prop.scale*5+"rem",
                clipPath: "polygon("+plotArray.join(", ")+")",
                background: "rgba(245, 37, 37, 0.2)",
            }}></div>
        </div>
    );
}