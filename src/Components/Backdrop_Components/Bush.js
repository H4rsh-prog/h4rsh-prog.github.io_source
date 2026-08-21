import gsap from "gsap";
import { useEffect, useState } from "react";


export default function Bush() {
    const [startFlag, setStartFlag] = useState(false);
    const styleObj = {
        backgroundColor:"var(--primary-color)",
        borderRadius:"20rem",
        zIndex:2,
        position:"absolute",
        outline:".5rem solid var(--secondary-color)",
        outlineOffset:"-1rem"
    }
    gsap.set(".bush", {});
    useEffect(()=>{
        if(!startFlag) {
            setStartFlag(true);
            return;
        }
        Array.from(document.getElementsByClassName("bush")).forEach((bush, index)=>{
            gsap.timeline().from(bush, {y: "1000", x: "-1000", duration: 3}).to(bush, {scaleX: "+=0.1", duration: 1.5, y: "-=10", x:"-=20", ease:"elastic.In(1,0.3)", repeat:-1, yoyo:true, delay: index*Math.random()*0.5});
        });
    }, [startFlag]);
    return (
        <div style={{position:"absolute", bottom:"18rem", left:"-2rem", zIndex:0}}>
            <div className="bush" style={{...styleObj, height:"15rem", width:"10rem", left:"10rem", top:"8rem", border:".5rem solid var(--accent-color)"}}></div>
            <div className="bush" style={{...styleObj, height:"25rem", width:"10rem", left:"14rem", top:"13rem", border:".5rem solid var(--accent-color)"}}></div>
            <div className="bush" style={{...styleObj, height:"20rem", width:"10rem", left:"6rem", top:"5rem", border:".5rem solid var(--accent-color)"}}></div>
            <div className="bush" style={{...styleObj, height:"25rem", width:"10rem", left:"0rem", top:"0rem", border:".5rem solid var(--accent-color)"}}></div>
            <div className="bush" style={{...styleObj, height:"18rem", width:"14rem", left:"2rem", top:"8rem", border:".5rem solid var(--accent-color)"}}></div>
            <div className="bush" style={{...styleObj, height:"18rem", width:"14rem", left:"5rem", top:"12rem", border:".5rem solid var(--accent-color)"}}></div>
            <div className="bush" style={{...styleObj, height:"18rem", width:"15rem", left:"-5rem", top:"3rem", border:".5rem solid var(--accent-color)"}}></div>
            <div className="bush" style={{...styleObj, height:"18rem", width:"15rem", left:"-1rem", top:"10rem", border:".5rem solid var(--accent-color)"}}></div>
            <div className="bush" style={{...styleObj, height:"18rem", width:"15rem", left:"-7rem", top:"7rem", border:".5rem solid var(--accent-color)"}}></div>
        </div>
    );
}