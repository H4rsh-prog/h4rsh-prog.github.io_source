import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrambleTextPlugin } from "gsap/all";
import CLASS_PROJECT from "./View_Components/CLASS_PROJECT";

gsap.registerPlugin(ScrambleTextPlugin);

const projects = [
    new CLASS_PROJECT(
        "CyberSAKura",
        // "CyberSAKura is a modular Swiss Army knife platform for encryption, encoding, hashing, steganography and more — all in one lightweight, extensible toolkit.",
        // ["API-GATEWAY", "CYBERSECURITY-TOOLS", "MICROSERVICE-ARCHITECTURE", "MODULARIZATION", "SPRING-BOOT", "SPRING-CLOUD", "SPRING-SECURITY"],
        "cyberSAKura"
    ),
    new CLASS_PROJECT(
        "Face Recognition Service",
        "face-recognition-service"
    ),
    new CLASS_PROJECT(
        "Interpretor",
        "Interpretor"
    ),
    new CLASS_PROJECT(
        "Marigold",
        "Marigold"
    ),
    new CLASS_PROJECT(
        "LZ77 Compression Service",
        "LZ_CompressionAlgo"
    ),
    new CLASS_PROJECT(
        "LinkedIn Content Automation Service",
        "LinkedIn_ContentAutomation"
    ),
    new CLASS_PROJECT(
        "Image LSB Steganography Service",
        "STEGANOGRAPHER_IMG_LSB"
    ),
    
];

export default function Projects() {
    const [startFlag, setStartFlag] = useState(false);
    const [expandedProject, setExpandedProject] = useState(null);

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
                    console.log(`iframe link set to ${projects[index].url}`);
                    
                });
            });
        }, 2000);
    },[startFlag]);
    useEffect(() => {
        if(!startFlag) {
            setStartFlag(true);
            return;
        }
        gsap.to("#project_details", {opacity: 0, duration: 0.5, ease: "power4.out"})
        setTimeout(() => {
            document.getElementById("project_details").style.backgroundImage = `url(${generateGithubCardURL(projects[expandedProject].repository)})`;
            gsap.to("#project_details", {opacity: 1, duration: 0.5, ease: "power4.out"});
        },800);
    }, [expandedProject]);
    return (
        <div id="project_wrapper" style={{height:"90%", width:"100%", marginTop:"5rem"}}>
            <div className="container mx-auto my-auto" id="project_container" style={{opacity:0, overflow:"hidden", position:"relative", backgroundColor:"var(--primary-color)", outline:"0.5rem solid var(--secondary-color)", border:"0.5rem solid var(--accent-color)", outlineOffset:"-1rem", color:"var(--secondary-color)", borderRadius:"2rem"}}>
                <div className="row mx-auto" style={{width:"100%", position:"absolute"}}>
                    <div className="col my-1">
                        <p className="display-3 megrim-regular" ref={ref.project_header} style={{textAlign:"end", marginRight:"1rem"}}></p>
                    </div>
                </div>
                <div className="row mx-auto" style={{width:"100%", position:"absolute", top:"5rem"}}>
                    <div className="col">
                        <p className="megrim-regular header-description" style={{textAlign:"end", marginRight:"1.5rem"}}>This section is under construction</p>
                    </div>
                </div>
                <div className="row mx-auto" style={{overflow:"hidden", height:"70%", top:"8rem", position:"relative"}}>
                    <div className="col-3 ms-3" style={{overflowY:"scroll", height:"100%"}}>
                        <div className="row g-2">
                            {projects.map((project, index) => (
                            <div key={index} className="card mb-2 project_item">
                                <div className="card-body" >
                                    <h5 className="card-title">{project.name}</h5>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="col">
                        <div id="project_details" style={{postion:"fixed", width:"100%", height:"100%", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"right", borderRadius:"2rem"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function generateGithubCardURL(repository) {
    return `https://githubcard.com/H4rsh-prog/${repository}.svg?d=gJuExwGYmljL`;
}