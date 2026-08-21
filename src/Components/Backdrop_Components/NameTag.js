import gsap from "gsap";
import { useContext, useEffect, useRef, useState } from "react";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { textPathContext } from "../../App";

gsap.registerPlugin(MorphSVGPlugin);

export default function NameTag() {
    const [startFlag, setStartFlag] = useState(false);
    const display = {
        svg : useRef(),
        display_0 : useRef(),
        display_1 : useRef(),
        wrapper : useRef(),
        logo_anchor_wrapper : useRef(),
        logo_anchor : useRef(),
        desc_wrapper : useRef(),
        desc : useRef(),
    }
    const functions = {
        logoExpanding : false,
        logoCollapsing : false,
        collapseLogo : async function (){
            this.logoCollapsing = true;
            await gsap.timeline().to(display.display_0.current, {morphSVG:textPaths.bracket, scale:0.8, y:5, x:10, duration:0.5, ease:"back.inOut(1.7)"})
                .to(display.logo_anchor_wrapper.current ,{width:"10rem", duration:.8}, "-=.3");
            this.logoCollapsing = false;
        },
        expandLogo : async function (){
            while(this.logoCollapsing){
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            this.logoExpanding = true;
            await gsap.timeline().to(display.logo_anchor_wrapper.current ,{width:"28rem", duration:.8})
                .to(display.display_0.current, {morphSVG:textPaths.h4rsh_prog, scale:1, y:0, x:10, duration:0.5, ease:"back.inOut(1.7)"} ,"-=.5");
            this.logoExpanding = false;
        }
    }
    const textPaths = useContext(textPathContext);
    
    useEffect(() => {
        if(!startFlag){
            setStartFlag(true);
            return;
        }
        gsap.set(display.svg.current, {x:40, y:-12, fill:"var(--accent-color)", transformOrigin:"left top", scale:0.8});
        gsap.set(display.display_0.current, {opacity:0, x:10});
        gsap.timeline().fromTo(display.logo_anchor_wrapper.current, {y:-100}, {y:0, duration:1, ease:"power2.inOut"}, "+=2")
        .to(display.display_0.current, {opacity:1, duration:1, ease:"power2.inOut"}, "-=0.5");
        display.wrapper.current.addEventListener("mouseenter", functions.collapseLogo);
        display.wrapper.current.addEventListener("mouseleave", functions.expandLogo);
    },[startFlag]);
    return (
        <div ref={display.wrapper} style={{width:"28rem", height:"8rem"}}>
            <div ref={display.logo_anchor_wrapper} className="pt-5 pb-5" style={{position:"absolute", width:"28rem", height:"8rem", backgroundColor:"var(--primary-color)", outline:".5rem solid var(--secondary-color)", border:".5rem solid var(--accent-color)", outlineOffset:"-1rem", zIndex:0}}>
                <div style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}>
                    <a href="/" ref={display.logo_anchor} style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}>.</a>
                </div>
                <svg id="text_svg" ref={display.svg} style={{width:"100vw", height:"100vh", pointerEvents:"none"}} xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path id="display_path_0" ref={display.display_0} d={textPaths.h4rsh_prog} style={{pointerEvents:"none"}}/>
                    </g>
                </svg>
            </div>
        </div>
    );
}