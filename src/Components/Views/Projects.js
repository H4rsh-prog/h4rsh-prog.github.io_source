import gsap from "gsap";
import { useEffect, useRef, useState, useTransition } from "react";
import { ScrambleTextPlugin } from "gsap/all";
import {Project_List as projects, generateGithubCardURL, generateGithubCardURLZoomed} from "./View_Components/CLASS_PROJECT";
import loading_gif from "../Backdrop_Components/assets/loading.gif"

gsap.registerPlugin(ScrambleTextPlugin);


export default function Projects() {
    const [startFlag, setStartFlag] = useState(false);
    const [expandedProject, setExpandedProject] = useState(null);
    const [pendingCardFetch, setCardFetch] = useTransition();

    const ref = {
        project_header: useRef(),
        zoomed_details: useRef()
    }
    useEffect(()=>{
        if(!startFlag) {
            setStartFlag(true);
            return;
        }
        gsap.set(ref.project_header.current, {opacity:0});
        gsap.set("#project_container", {height:0, width:0, opacity:0});
        setTimeout(()=>{
            gsap.to(".project-item-name", {scrambleText: {
                    text:"{original}",
                    chars:"upperAndLowerCase",
                    revealDelay: 1.2,
                    tweenLength: true,
                }, duration: 2.5, ease: "power4.out"})
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
            Array.from(document.getElementsByClassName("project_item")).forEach((project, index) => {
                project.addEventListener("mouseenter", () => {
                    gsap.to(project, {scale: 1.05, backgroundColor: "var(--secondary-color)", duration: 0.3, ease: "power4.out"});
                });
                project.addEventListener("mouseleave", () => {
                    gsap.to(project, {scale: 1, backgroundColor: "var(--accent-color)", duration: 0.3, ease: "power4.out"});
                });
                project.addEventListener("click", () => {
                    if(expandedProject == index) {
                        setExpandedProject(null);
                    } else {
                        setExpandedProject(index);
                    }
                });
            });
            document.getElementById("project_details").addEventListener("mouseenter", () => {
                gsap.to("#project_details", {scale: 0.95, duration: 0.3, ease: "power4.out"});
            });
            document.getElementById("project_details").addEventListener("mouseleave", () => {
                gsap.to("#project_details", {scale: 1, duration: 0.3, ease: "power4.out"});
            });
        }, 200);
    },[startFlag]);
    useEffect(() => {
        if(!startFlag) {
            setStartFlag(true);
            return;
        }
        //HANDLING CARD CONTENT
        setCardFetch(async ()=>{
            await gsap.to("#project_details", {x:-100, opacity: 0, duration: 0.5, ease: "power4.out"})
            await fetch(generateGithubCardURL(projects[expandedProject].repository)).then(()=>{document.getElementById("project_details").style.backgroundImage = `url(${generateGithubCardURL(projects[expandedProject].repository)})`})
            await fetch(generateGithubCardURLZoomed(projects[expandedProject].repository)).then(()=>{ref.zoomed_details.current.style.backgroundImage = `url(${generateGithubCardURLZoomed(projects[expandedProject].repository)})`})
            gsap.to("#project_details", {x:0, opacity: 1, duration: 0.5, ease: "power4.out"});
        })
    }, [expandedProject]);
    return (
        <div id="project_wrapper" style={{height:"90%", width:"100%", marginTop:"5rem"}}>
            <div className="container mx-auto my-auto" id="project_container" style={{opacity:0, overflow:"hidden", position:"relative", backgroundColor:"var(--primary-color)", outline:"0.5rem solid var(--secondary-color)", border:"0.5rem solid var(--accent-color)", outlineOffset:"-1rem", color:"var(--secondary-color)", borderRadius:"2rem", color:"var(--accent-color)"}}>
                <div className="row mx-auto" style={{width:"100%", position:"absolute"}}>
                    <div className="col my-1">
                        <p className="display-3 megrim-regular" ref={ref.project_header} style={{textAlign:"end", marginRight:"1rem"}}></p>
                    </div>
                </div>
                <div className="row mx-auto" style={{width:"100%", position:"absolute", top:"5rem"}}>
                    <div className="col">
                        <p className="megrim-regular header-description" style={{textAlign:"end", marginRight:"1.5rem", opacity:0}}>This section is under construction</p>
                    </div>
                </div>
                <div className="row mx-auto" style={{overflow:"hidden", height:"70%", top:"8rem", position:"relative"}}>
                    <div className="col-3 ms-3 px-4" style={{overflowY:"scroll", height:"100%", zIndex:1}}>
                        <div className="row g-2 my-2">
                            {projects.map((project, index) => (
                            <div key={index} className="card mb-2 project_item">
                                <div className="card-body" >
                                    <h5 className="card-title project-item-name">{pendingCardFetch && expandedProject==index?"Loading..":project.name}</h5>
                                </div>
                            </div>
                        ))}
                        </div>
                        <div className="position-absolute h-25 bottom-0 start-0 ms-4" style={{background:"linear-gradient(transparent, var(--primary-color))", width:"49%", pointerEvents:"none"}}></div>
                        <div className="position-absolute h-25 top-0 start-0 ms-4" style={{background:"linear-gradient(var(--primary-color), transparent)", width:"49%", pointerEvents:"none"}}></div>
                    </div>
                    <div className="col-3" style={{position:"relative", top:"0.5rem"}}>
                        <a target="_blank" href={expandedProject!=null?`https://github.com/H4rsh-prog/${projects[expandedProject].repository}`:null}>
                            <div id="project_details" style={{opacity:0, postion:"fixed", width:"100%", height:"100%", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"right"}}></div>
                        </a>
                    </div>
                    {pendingCardFetch?<div className="col w-100 h-100 me-2" style={{backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundImage:loading_gif}}/>:null}
                    <div className="col w-100 h-100 me-2" ref={ref.zoomed_details} id="project_details_zoomed" style={{borderRadius:"2rem", opacity:pendingCardFetch?0:1, backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}/>
                </div>
            </div>
        </div>
    );
}
