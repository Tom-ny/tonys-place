'use client'

import "./header.css"
import StyleButtonRow from "./headerComponents/styleButtonRow";
import StyleButton from "./styleButton"
import { useEffect, useState } from "react";

function Header(){

    const [showIntroText, setShowIntroText] = useState(true);
    const [fadeOut, setFadeOut] = useState(false)
    const [fadeIn, setFadeIn] = useState(false)

    useEffect( () => {
        const timer1 = setTimeout(() => setFadeOut(true), 2000);
        const timer2 = setTimeout(() => setShowIntroText(false), 3000);
        const timer3 = setTimeout(() => setFadeIn(true), 4000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };

    }, []);


    return(
    <>
        <div className="headerWrapper">
            {showIntroText ? 
            <p className={`introText ${fadeOut ? "fadeOut" : ""} `}> welcome to tonys place</p> //ternary true (showIntroText) 
            :
            <StyleButtonRow className={`styleButtonRow ${fadeIn ? "fadeIn" : ""} `}/> //TODO: fix fade in of buttons
            }

        </div>
    
    </>
    )

}
 
function HeaderExperimental(){
    return(
    <>
    <div className="headerWrapper">
        <p>welcome to tonys place</p>

    </div>
    </>
    )
}

export default Header