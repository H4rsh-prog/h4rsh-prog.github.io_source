import { useEffect, useState } from "react";
import loading_gif from "../Backdrop_Components/assets/loading.gif";
import gsap from "gsap";

export default function DelayLoader(prop) {
    const [startFlag, setStartFlag] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [values, setValues] = useState({
        component : prop.component,
        initDelay : prop.initDelay==null?0:prop.initDelay,
        loadDelay : prop.loadDelay
    })

    useEffect(()=>{
        if(!startFlag) {
            setStartFlag(true);
            return;
        }
        gsap.to("#loading", {opacity:1, delay:values.initDelay, duration:1});
        gsap.to("#loading", {opacity:0, delay:values.initDelay+values.loadDelay, duration:0.7});
        setTimeout(()=>{setLoaded(true)}, (values.initDelay*1000)+(values.loadDelay*1000)+700);
    })
    return (
        <div className="w-100 h-100">
            {!loaded?
                <div id="loading" className="w-100 h-100" style={{opacity:0, background:`url(${loading_gif})`, backgroundSize:"auto", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}></div>
            :
                values.component
            }
        </div>
    );
}