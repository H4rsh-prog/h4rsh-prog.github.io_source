import { useEffect, useState } from "react";
import waddling_goose from "./assets/LQ_waddling_goose.gif";
import gsap from "gsap";

export default function WaddlingGoose() {
    const [startFlag, setStartFlag] = useState(true);
    useEffect(()=>{
        if(startFlag) {
            setStartFlag(false);
            return;
        }
        const waddle_distance = Math.floor(window.innerWidth+600) - 80;
        const waddle_duration = 9*(waddle_distance/1400);
        gsap.timeline({repeat:-1}).fromTo("#waddling-goose", {x: waddle_distance}, {x: "0", duration: waddle_duration, ease: "none"})
        
        .to("#waddling-goose", {rotateY:"180deg", duration: 0.1})
        .to("#waddling-goose", {x: waddle_distance, duration: waddle_duration, ease: "none"})
        .to("#waddling-goose", {rotateY:"0deg", duration: 0.1});
    },[startFlag]);
    return (
        <div>
            <img id="waddling-goose" className="anim" src={waddling_goose} alt="Waddling Goose" style={{position:"absolute", bottom:"4%", left:"5rem", width:"10rem", height:"7rem", scale:1.5}} />
        </div>
    );
}
