import sleeping_cat from "./assets/sleeping_cat.gif";

export default function SleepingCat() {
    return (
        <div>
            <div id="sleeping-cat" className="anim" style={{position:"absolute", bottom:"-1.5rem", right:"3rem", backgroundImage: `url(${sleeping_cat})`, backgroundSize:"contain" , backgroundPosition:"center", backgroundRepeat:"no-repeat", width:"10rem", height:"7rem", scale:2.1}}></div>
        </div>
    );
}
