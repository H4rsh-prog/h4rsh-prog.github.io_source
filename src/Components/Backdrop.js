import {useEffect} from "react";
import gsap from "gsap";
import WaddlingGoose from "./Backdrop_Components/WaddlingGoose";
import NavBar from "./Backdrop_Components/NavBar";
import NameTag from "./Backdrop_Components/NameTag";
import { Routes, Route } from "react-router";
import Skillset from "./Views/Skillset";
import AboutMe from "./Views/AboutMe";
import Bush from "./Backdrop_Components/Bush";
import Projects from "./Views/Projects";
import DelayLoader from "./Backdrop_Components/DelayLoader";

export default function Backdrop() {
    useEffect(() => {
        gsap.set(".anim", {opacity: 0});
        setTimeout(()=>{gsap.to("#waddling-goose", {opacity: 1, duration: 3.5, ease: "power4.out"})}, 3000);
        gsap.timeline()
            .fromTo("#box", {width:"0%", height:"10%", opacity: 0, outline:"0rem solid var(--accent-color)"}, {width: "97%", opacity: 1, duration: 1.5, ease: "power4.out"})
            .to("#box", {outline:".5rem solid var(--accent-color)", outlineOffset:"-1rem", duration:1}, "-=1")
            .to("#box", {height:"95%", duration: 1.5, ease: "power4.out"}, "-=.1");
    }, []);
    return (
        <div id='backdrop' style={{height:"100%", width:"100%", position:"fixed", zIndex: -2, backgroundColor:"var(--primary-color)"}}>
            <div id="box" className="row" style={{margin:"auto", position:"relative", top:"2%", backgroundColor:"var(--secondary-color)",  borderRadius:"2rem", outline:".5rem solid var(--accent-color)", outlineOffset:"-1rem", zIndex:-1, overflow:"hidden"}}>
                <NavBar/>
                <div style={{position:"absolute"}}><NameTag/></div>
                <div id="content_container" style={{height:"90%", width:"100%", zIndex:-1}}>
                        <Routes>
                            <Route path="/" element={<DelayLoader component={<AboutMe/>} initDelay={1.7} loadDelay={1}/>}/>
                            <Route path="/skillset" element={<Skillset/>}/>
                            <Route path="/projects" element={<Projects/>}/>
                            <Route path="/about-me" element={<AboutMe/>}/>
                        </Routes>
                </div>
                <WaddlingGoose/>
                <Bush/>
            </div>
        </div>
    );
}   