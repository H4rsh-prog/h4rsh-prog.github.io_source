import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrambleTextPlugin } from "gsap/all";
import CLASS_PROJECT from "./View_Components/CLASS_PROJECT";

gsap.registerPlugin(ScrambleTextPlugin);

const projects = [
    new CLASS_PROJECT({name: "Old Resume", description: "Resume Portfolio made on React.js", technologies: ["React", "Nothing Else"], link: "https://h4rsh-prog.github.io/"}),
    new CLASS_PROJECT({name: "Old Resume", description: "Resume Portfolio made on React.js", technologies: ["React", "Nothing Else"]}),
    new CLASS_PROJECT({name: "Old Resume", description: "Resume Portfolio made on React.js", technologies: ["React", "Nothing Else"], link: "https://h4rsh-prog.github.io/"}),
    new CLASS_PROJECT({description: "Resume Portfolio made on React.js", technologies: ["React", "Nothing Else"], link: "https://h4rsh-prog.github.io/"}),
    new CLASS_PROJECT({name: "Old Resume", technologies: ["React", "Nothing Else"], link: "https://h4rsh-prog.github.io/"}),
    new CLASS_PROJECT({name: "Old Resume", link: "https://h4rsh-prog.github.io/"}),
    new CLASS_PROJECT({name: "Old Resume", description: "Resume Portfolio made on React.js", technologies: ["React", "Nothing Else"], link: "https://h4rsh-prog.github.io/"}),
    new CLASS_PROJECT({name: "Old Resume", description: "Resume Portfolio made on React.js", technologies: ["React", "Nothing Else"], link: "https://h4rsh-prog.github.io/"}),
    
];

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
                <div className="row mx-auto" style={{position:"relative", width:"100%", height:"70%", marginTop:"8rem", overflowY:"scroll", overflowX:"hidden", border:"1px solid red"}}>
                    <div className="col-6 g-2">
                        {projects.map((project, index) => (
                        <div key={index} className="card mb-2">
                            <div className="card-body">
                                {(project.name) ? <h5 className="card-title">{project.name}</h5> : null}
                                {(project.description) ? <p className="card-text">{project.description}</p> : null}
                                {(project.technologies) ? <p className="card-text">Technologies: {project.technologies.join(", ")}</p> : null}
                                {(project.url) ? <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a> : null}
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="col">
                        <div className="container mx-auto my-auto" style={{opacity:0, position:"relative", backgroundColor:"var(--primary-color)", outline:"0.5rem solid var(--secondary-color)", border:"0.5rem solid var(--accent-color)", outlineOffset:"-1rem", color:"var(--secondary-color)", borderRadius:"2rem"}}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}