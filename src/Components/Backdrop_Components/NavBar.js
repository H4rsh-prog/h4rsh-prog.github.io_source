import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SleepingCat from "./SleepingCat";
import {NavLink} from "react-router";
import { browserContext } from "../../App";

export default function NavBar() {
    const navbar_container = useRef();
    const [startFlag, setStartFlag] = useState(false);
    const values = useContext(browserContext);
    useEffect(()=>{
        if(!startFlag){
            setStartFlag(true);
            return; 
        }
        gsap.set("#namesake_container", {opacity: 0});
        gsap.set("#nav_elements", {opacity: 0});
        gsap.set(".nav_elem_path", {y:30, fill:"var(--accent-color)", transformOrigin:"left top", scale:0.8});
        if(!values.TOUCH){
            navbar_container.current.addEventListener("mouseenter", ()=>{
                gsap.to(navbar_container.current, {height: values.navbar.height[values.DPI], duration: 1, ease: "power4.out"});
                gsap.to("#sleeping-cat", {opacity: 1, duration: 3.5, ease: "power4.out"})
                gsap.to("#nav_elements", {opacity: 1, duration: 1, ease: "power4.out"});
                gsap.to(".nav_elem_path", {display:"block", duration: 1, ease: "power4.out"});
            });
            navbar_container.current.addEventListener("mouseleave", ()=>{
                gsap.to("#nav_elements", {opacity: 0, duration: 1, ease: "power4.out"});
                gsap.to("#sleeping-cat", {opacity: 0, duration: 3.5, ease: "power4.out"})
                gsap.to(navbar_container.current, {height: "3rem", duration: 1, ease: "power4.out"});
                gsap.to(".nav_elem_path", {display:"none", duration: 0.7, ease: "power4.out"});
            });
            Array.from(document.getElementsByClassName("nav_elem_path")).forEach((elem)=>{
                elem.parentElement.addEventListener("mouseenter", ()=>{gsap.to(elem, {color: "var(--secondary-color)"})});
                elem.parentElement.addEventListener("mouseleave", ()=>{gsap.to(elem, {color: "var(--accent-color)"})});
            });
        } else {
            document.getElementById("navbar_menu").addEventListener("click", ()=>{
                gsap.to(navbar_container.current, {height: values.navbar.height[values.DPI], duration: 1, ease: "power4.out"});
                gsap.to("#sleeping-cat", {opacity: 1, duration: 3.5, ease: "power4.out"})
                gsap.to("#nav_elements", {opacity: 1, duration: 1, ease: "power4.out"});
                gsap.to(".nav_elem_path", {display:"block", duration: 1,  ease: "power4.out"});
                gsap.to("#navbar_menu", {opacity: 0, duration: 1, pointerEvents:"none", ease: "power4.out"});
            });
            Array.from(document.getElementsByClassName("nav_elem_path")).forEach((elem)=>{
                elem.addEventListener("click", ()=>{
                    gsap.to("#nav_elements", {opacity: 0, duration: 1, ease: "power4.out"});
                    gsap.to("#sleeping-cat", {opacity: 0, duration: 3.5, ease: "power4.out"})
                    gsap.to(navbar_container.current, {height: "6rem", duration: 1, ease: "power4.out"});
                    gsap.to(".nav_elem_path", {display:"none", duration: 0.7, ease: "power4.out"});
                    gsap.to("#navbar_menu", {opacity: 1, duration: 1, pointerEvents: "auto", ease: "power4.out"});
                });
                elem.addEventListener("mouseenter", ()=>{gsap.to(elem, {color: "var(--secondary-color)"})});
                elem.addEventListener("mouseleave", ()=>{gsap.to(elem, {color: "var(--accent-color)"})});
            });
        }
    },[startFlag]);
    return (
        <div ref={navbar_container} id="navbar_container" className="row" style={{position:"fixed", top:"0", left:".7rem", width:"100%", height: values.TOUCH? "6rem" : "3rem", backgroundColor:"var(--primary-color)", zIndex: 1, outline:"0.5rem solid var(--secondary-color)", border:"0.5rem solid var(--accent-color)", outlineOffset:"-1rem", display:"flex", alignItems:"center", justifyContent:"center"}}>
            {values.TOUCH ? <span class="material-symbols-outlined position-absolute" id="navbar_menu" style={{color:"var(--accent-color)", textAlign:"start", fontSize:"3rem", zIndex: 1}}>menu</span>:null}
            <div className="row mx-auto mb-5" id="nav_elements" style={{height:"70%", width:"80%"}}>
                <div className="col-lg">
                    <NavLink className="navbar-link  justify-content items-center align-items" to="/skillset">
                        <p className="display-4 megrim-regular nav_elem_path" style={{textAlign:"center", display:"none"}}>SKILLSET</p>
                    </NavLink>
                </div>
                <div className="col-lg">
                    <NavLink className="navbar-link" to="/projects">
                        <p className="display-4 megrim-regular nav_elem_path" style={{textAlign:"center", display:"none"}}>PROJECTS</p>
                    </NavLink>
                </div>
                <div className="col-lg">
                    <NavLink className="navbar-link" to="/about-me">
                        <p className="display-4 megrim-regular nav_elem_path" style={{textAlign:"center", display:"none"}}>ABOUT ME</p>
                    </NavLink>
                </div>
            </div>
            <div className="col-2" style={{pointerEvents:"none"}}>
                <SleepingCat/>
            </div>
        </div>
    );
}