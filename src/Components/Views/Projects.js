import gsap from "gsap";
import { useContext, useEffect, useRef, useState } from "react";
import { textPathContext } from "../../App";
import { ScrambleTextPlugin } from "gsap/all";

gsap.registerPlugin(ScrambleTextPlugin);

export default function Projects() {
    const [startFlag, setStartFlag] = useState(false);
    const ref = {
        project_header: useRef()
    }
    useEffect(()=>{
        if(!startFlag) {
            setStartFlag(true);
            return;
        }
        gsap.set(ref.project_header.current, {opacity:0});
        gsap.set(".header-description", {opacity:0});
        gsap.set("#project_container", {height:0, width:0, opacity:0});
        setTimeout(()=>{
            gsap.timeline()
                .to("#project_container", {height: "100%", width: "97%", opacity: 1, duration:1.4, ease: "power4.out"})
                .to(ref.project_header.current, {scrambleText: {
                    text: "00000000",
                    chars: "XOxo",
                    revealDelay: 0.2,
                    tweenLength: true
                }, duration: 3.5, opacity: 1, ease: "power4.out"})
                .to(ref.project_header.current, {scrambleText: {
                    text: "PROJECTS",
                    chars: "XOxo",
                    revealDelay: 0.2,
                    tweenLength: true
                }, duration: 3.5, ease: "power4.out"}, "-=2.5")
                .to(".header-description", {opacity: 1, duration: 1, ease: "power4.out"}, "-=2.5");
        }, 2000);
    },[startFlag]);
    return (
        <div id="project_wrapper" style={{height:"100%", width:"100%", marginTop:"2.7%"}}>
            <div className="container mx-auto my-auto" id="project_container" style={{backgroundColor:"var(--primary-color)", outline:"0.5rem solid var(--secondary-color)", border:"0.5rem solid var(--accent-color)", outlineOffset:"-1rem", color:"var(--secondary-color)", borderRadius:"2rem"}}>
                <div className="row mx-auto" style={{width:"100%"}}>
                    <div className="col my-1">
                        <p className="display-3 megrim-regular" ref={ref.project_header} style={{textAlign:"end"}}></p>
                    </div>
                </div>
                <div className="row mx-auto" style={{width:"100%"}}>
                    <div className="col">
                        <p className="megrim-regular header-description me-3" style={{textAlign:"end", marginTop:"-1rem", }}>This section is under construction</p>
                    </div>
                </div>
            </div>
        </div>
    );
}