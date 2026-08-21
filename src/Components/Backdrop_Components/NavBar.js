import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SleepingCat from "./SleepingCat";
import {NavLink} from "react-router";
import { textPathContext } from "../../App";

export default function NavBar() {
    const navbar_container = useRef();
    const [startFlag, setStartFlag] = useState(false);
    useEffect(()=>{
        if(!startFlag){
            setStartFlag(true);
            return; 
        }
        gsap.set("#namesake_container", {opacity: 0});
        gsap.set("#nav_elements", {opacity: 0});
        gsap.set(".nav_elem_path", {y:30, fill:"var(--accent-color)", transformOrigin:"left top", scale:0.8});
        navbar_container.current.addEventListener("mouseenter", ()=>{
            gsap.to(navbar_container.current, {height: "10rem", duration: 1, ease: "power4.out"});
            gsap.to("#sleeping-cat", {opacity: 1, duration: 3.5, ease: "power4.out"})
            gsap.to("#nav_elements", {opacity: 1, duration: 1, ease: "power4.out"});
        });
        navbar_container.current.addEventListener("mouseleave", ()=>{
            gsap.to("#nav_elements", {opacity: 0, duration: 1, ease: "power4.out"});
            gsap.to("#sleeping-cat", {opacity: 0, duration: 3.5, ease: "power4.out"})
            gsap.to(navbar_container.current, {height: "3rem", duration: 1, ease: "power4.out"});
        });
        Array.from(document.getElementsByClassName("nav_elem_path")).forEach((elem, index)=>{
            elem.parentElement.addEventListener("mouseenter", ()=>{gsap.to(elem, {fill: "var(--secondary-color)"})});
            elem.parentElement.addEventListener("mouseleave", ()=>{gsap.to(elem, {fill: "var(--accent-color)"})});
        });
    },[startFlag]);
    const textPaths = useContext(textPathContext);
    return (
        <div ref={navbar_container} id="navbar_container" className="row" style={{position:"fixed", top:"0", left:".7rem", width:"100%", height:"3rem", backgroundColor:"var(--primary-color)", zIndex: 1, outline:"0.5rem solid var(--secondary-color)", border:"0.5rem solid var(--accent-color)", outlineOffset:"-1rem", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div className="col row" id="nav_elements" style={{height:"70%"}}>
                <div className="col-1"></div>
                <div className="col" style={{height:"100%"}}>
                    <NavLink to="/skillset"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><path className="nav_elem_path" d={textPaths.skillset}/></svg></NavLink>
                </div>
                <div className="col" style={{height:"100%"}}>
                    <NavLink to="/projects"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><path className="nav_elem_path" d={textPaths.project}/></svg></NavLink>
                </div>
                <div className="col" style={{height:"100%"}}>
                    <NavLink to="/about-me"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><path className="nav_elem_path" d={textPaths.aboutMe}/></svg></NavLink>
                </div>
            </div>
            <div className="col-2" style={{pointerEvents:"none"}}>
                <SleepingCat/>
            </div>
        </div>
    );
}