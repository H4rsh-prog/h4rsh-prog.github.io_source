import gsap from "gsap";
import { useContext, useEffect, useRef, useState } from "react";
import { browserContext } from "../../App";

export default function AboutMe() {
    const [startFlag, setStartFlag] = useState(false);
    const browser = useContext(browserContext);
    const [ref, setRef] = useState({
        header : useRef(),
    })
    const [colorHex, setColorHex] = useState({
        primary: "1F2421",
        secondary: "216869",
        tertiary: "49A078",
        transitionary: "9CC5A1",
        accent: "DCE1DE"
    })

    useEffect(()=>{
        if(!startFlag) {
            setStartFlag(true);
            return;
        }
        gsap.set("#aboutme_container", {height:0, width:0, opacity:0});
        gsap.set(".about-info", {scale:0, opacity:0, width:"100%", height:"auto"});
        setTimeout(()=>{
            gsap.timeline()
                .to("#aboutme_container", {height: "100%", width: "97%", opacity: 1, duration:1.4, ease: "power4.out"})
                .to(ref.header.current, {scrambleText: {
                    text: "00000000",
                    chars: "XOxo",
                    revealDelay: 0.2,
                    tweenLength: true
                }, duration: 3.5, opacity: 1, ease: "power4.out"})
                .to(ref.header.current, {scrambleText: {
                    text: "ABOUT_ME",
                    chars: "XOxo",
                    revealDelay: 0.2,
                    tweenLength: true
                }, duration: 3.5, ease: "power4.out"}, "-=2.5")
                .to(".about-info", {opacity:1, scale:1, duration:1, ease: "power4.out"}, "-=2.5")
                .to(".header-description", {opacity: 1, duration: 1, ease: "power4.out"}, "-=2.5");
        },200)
    }, [startFlag])
    return (
        <div id="aboutme_wrapper" style={{height:"90%", width:"100%", marginTop:browser.DPI === "MOBILE" ? "0rem" : "7rem"}}>
            <div className="container mx-auto my-auto" id="aboutme_container" style={{opacity:0, overflow:"hidden", overflowY:"scroll", position:"relative", backgroundColor:"var(--primary-color)", outline:"0.5rem solid var(--secondary-color)", border:"0.5rem solid var(--accent-color)", outlineOffset:"-1rem", color:"var(--secondary-color)", borderRadius:"2rem", color:"var(--accent-color)"}}>
                <div className="row mx-auto mt-4 pt-4 px-5 pb-3">
                    { browser.DPI == "MOBILE" || browser.DPI == "LDPI" ? 
                        <div className="col-lg my-1">
                            <img className="about-info w-75 p-2 my-4" src="https://avatars.githubusercontent.com/u/182053834?v=4" style={{borderRadius:"20rem", border:"0.15rem solid var(--accent-color)", backgroundColor:"var(--secondary-color)"}} alt="Github Profile Picture"/>
                            <img className="about-info" src={`https://ghstats.dev/api/sparkline?username=H4rsh-prog&bg=${colorHex.secondary}&title_color=${colorHex.accent}&icon_color=${colorHex.primary}&border_color=${colorHex.accent}`} alt="Contribution Sparkline"/>
                        </div>
                    : null}
                    <div className="col-lg my-1">
                        <img className="about-info" src={`https://ghstats.dev/api/card?username=H4rsh-prog&bg=${colorHex.secondary}&title_color=${colorHex.accent}&icon_color=${colorHex.primary}&border_color=${colorHex.accent}`} alt="GitHub Stats Card" />
                    </div>
                    { browser.DPI != "MOBILE" && browser.DPI != "LDPI" ? 
                        <div className="col-lg my-1">
                            <img className="about-info w-75 p-2 my-4" src="https://avatars.githubusercontent.com/u/182053834?v=4" style={{borderRadius:"20rem", border:"0.15rem solid var(--accent-color)", backgroundColor:"var(--secondary-color)"}} alt="Github Profile Picture"/>
                            <img className="about-info" src={`https://ghstats.dev/api/sparkline?username=H4rsh-prog&bg=${colorHex.secondary}&title_color=${colorHex.accent}&icon_color=${colorHex.primary}&border_color=${colorHex.accent}`} alt="Contribution Sparkline"/>
                        </div> 
                    : null}
                    <div className="col-lg my-1">
                        <img className="about-info" src={`https://ghstats.dev/api/langs?username=H4rsh-prog&bg=${colorHex.secondary}&title_color=${colorHex.accent}&icon_color=${colorHex.primary}&border_color=${colorHex.accent}&layout=donut_vertical`} alt="Top Languages" />
                    </div>
                </div>
                {browser.DPI != "MOBILE" && browser.DPI != "LDPI" ?
                    <div className="row mx-auto" style={{width:"100%", position:"absolute", bottom:"0rem", right:"3rem" }}>
                        <div className="col my-1">
                            <p className="display-3 megrim-regular" ref={ref.header} style={{textAlign:"end", marginRight:"1rem"}}></p>
                        </div>
                    </div>
                :
                    <div className="row mx-auto" style={{width:"100%", position:"absolute", top:"1rem"}}>
                        <div className="col my-1">
                            <p className="display-3 megrim-regular" ref={ref.header} style={{textAlign:"end", marginRight:"1rem"}}></p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}