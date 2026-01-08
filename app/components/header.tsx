import "./header.css"
import StyleButton from "./styleButton"
import { useEffect, useState } from "react";

function Header(){

    const [showIntroText, setShowIntroText] = useState(true);

    useEffect


    return(
    <>
        <div className="headerWrapper">

            <StyleButton number={1}/>
            <StyleButton number={2}/>
            <StyleButton number={3}/>

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