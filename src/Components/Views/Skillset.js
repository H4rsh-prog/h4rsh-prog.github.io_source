import gsap from "gsap";
import { useContext, useEffect, useRef, useState } from "react";
import { ScrambleTextPlugin } from "gsap/all";
import { browserContext } from "../../App";

gsap.registerPlugin(ScrambleTextPlugin);

const skillGroups = [
    {
        
        title: "Architectural & Design Principles",
        skills: [
            "Microservices Architecture",
            "SOA",
            "Monolithic Architecture",
            
            "Programming Styles { "+
            "Object-Oriented Programming ; "+
            "Aspect-Oriented Programming ; "+
            "Data-Oriented Programming ; "+
            "Entity Component System ; "+
            "Test Driven Development ; "+
            "Dynamic Programming"+
            " }",
            
            "SOLID",
            "REST",
            "Agile/SCRUM",
            "DFD",
        ],
    },
    {
        title: "Tech Stack (FullStack)",
        skills: [
            "Spring Framework Ecosystem (Spring Boot, Spring Data JPA, Spring Security 6, Spring AI, Spring Cloud, Spring Web Services)",
            "Eureka",
            "RabbitMQ",
            "KafkaMessageBroker",
            "OpenCV",
            "RestTemplates",
            "OpenFeign",
            "LangChain4J",

            "<FrontEnd> "+
            "React.JS ; "+
            "Bootstrap 5 ; "+
            "GSAP ; "+
            "JQuery"+
            " </FrontEnd>",
        ],
    }, 
    {
        title: "Tools",
        skills: [
            "Docker",
            "Git",
            "Maven",
            "Gradle",
            "Github Copilot",
            "JIRA"
        ]
    },
];

export default function Skillset() {
    const [startFlag, setStartFlag] = useState(false);
    const browser = useContext(browserContext);
    const ref = {
        header: useRef(),
    };

    useEffect(() => {
        if (!startFlag) {
            setStartFlag(true);
            return;
        }

        gsap.set(ref.header.current, { opacity: 0 });
        gsap.set("#skillset_container", { height: 0, width: 0, opacity: 0 });
        gsap.set(".skill-group", { opacity: 0, y: 30, scale: 0.95 });

        setTimeout(() => {
            gsap.timeline()
                .to("#skillset_container", { height: "100%", width: "97%", opacity: 1, duration: 1.4, ease: "power4.out" })
                .to(ref.header.current, { scrambleText: {
                    text: "00000000",
                    chars: "XOxo",
                    revealDelay: 0.2,
                    tweenLength: true
                }, duration: 3.5, opacity: 1, ease: "power4.out" })
                .to(ref.header.current, { scrambleText: {
                    text: "SKILLSET",
                    chars: "XOxo",
                    revealDelay: 0.2,
                    tweenLength: true
                }, duration: 3.5, ease: "power4.out" }, "-=2.5")
                .to(".skill-group", { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.12, ease: "power4.out" }, "-=2.2")
                .to(".header-description", { opacity: 1, duration: 1, ease: "power4.out" }, "-=2.5");
        }, 200);
    }, [startFlag]);

    return (
        <div id="skillset_wrapper" style={{ height: "90%", width: "100%", marginTop: browser.DPI === "MOBILE" ? "0rem" : "7rem" }}>
            <div className="container mx-auto my-auto" id="skillset_container" style={{ opacity: 0, overflowY:"scroll", position: "relative", backgroundColor: "var(--primary-color)", outline: "0.5rem solid var(--secondary-color)", border: "0.5rem solid var(--accent-color)", outlineOffset: "-1rem", color: "var(--secondary-color)", borderRadius: "2rem", color: "var(--accent-color)" }}>
                <div className="row mx-auto" style={{ width: "100%", position: "absolute" }}>
                    <div className="col my-1">
                        <p className="display-3 megrim-regular" ref={ref.header} style={{ textAlign: "end", marginRight: "1rem" }}></p>
                    </div>
                </div>

                <div className="row mx-auto" style={{ width: "100%", position: "absolute", top: "4rem" }}>
                    <div className="col">
                        <p className="megrim-regular header-description" style={{ textAlign: "end", marginRight: "1.5rem", opacity: 0 }}>
                            Core technologies and strengths
                        </p>
                    </div>
                </div>
                <div className="row mx-auto" style={{ width: "92%", position: "relative", top: "7rem"}}>
                    <div className="col-lg-6 mb-4">
                        {SkillCard(skillGroups[0])}
                    </div>
                    <div className="col-lg-6 mb-4">
                        {SkillCard(skillGroups[1])}
                    </div>
                </div>
                <div className="row mx-auto" style={{ width: "92%", position: "relative", top: "7rem"}}>
                    {SkillCard(skillGroups[2])}
                </div>
            </div>
        </div>
    );
}

function SkillCard(group) {
    return (
        <div className="skill-group h-100 px-4 py-4" style={{
            backgroundColor: "var(--secondary-color)",
            border: "0.2rem solid var(--accent-color)",
            borderRadius: "1rem",
            boxShadow: "inset 0 0 0 0.35rem rgba(31, 36, 33, 0.2)"
        }}>
            <h3 className="megrim-regular mb-3" style={{ color: "var(--accent-color)", letterSpacing: "0.08em", fontSize: "1.6rem" }}>
                {group.title}
            </h3>
            <div className="d-flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                    <span
                        key={skillIndex}
                        className="px-3 py-2"
                        style={{
                            borderRadius: "0.45rem",
                            backgroundColor: "var(--primary-color)",
                            color: "var(--accent-color)",
                            border: "0.1rem solid var(--transitionary-color)",
                            fontWeight: 600,
                            letterSpacing: "0.02em",
                            fontSize: "0.9rem"
                        }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}