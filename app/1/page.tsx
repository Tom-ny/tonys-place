'use client';

import CvButton from "../components/cvButton";
import "../page.css"

import { useState } from "react";
export default function Home() {

  const [isButtonHovered, setButtonHovered] = useState(false);

  return (
    <>
    <div className={`contentWrapper ${isButtonHovered ? 'cvButtonHovered': ''}`}>
        
        <div className = "cvButtonContainer">
        
        <CvButton 
          onHoverChange={setButtonHovered}
        />

        </div>
      <p className="hoverMeText">
        {isButtonHovered ? "<3" : "hover me"}</p>

    </div>
    </>
    
  );
}
