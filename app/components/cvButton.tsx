'use client'

import "./cvButton.css";
import Image from 'next/image';
import { useState } from "react";

type cvButtonProps = {
    //imgSrc: string;
    onHoverChange?: (isHovered: boolean) => void; //callback prop
} & React.HTMLAttributes<HTMLDivElement>;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

function CvButton(props: cvButtonProps){

    //const trueSrc = "/ankaFrame+CV.png"; IMAGES IMPORTED AS OBJECTS INSTEAD, otherwise gh-pages breaks
    //const falseSrc = "/ankaFrame.png"; 
    const trueSrc = `${basePath}/ankaFrame+CV.png`;
    const falseSrc = `${basePath}/ankaFrame.png`;

    const [isHovered, setIsHovered] = useState(false); //local hover state of the component

    const handleClick = () => {
        window.open(`${basePath}/Resume_2025.pdf`)
    }

    return(
        <>
        <div className="cvButtonWrapper"
            onMouseEnter={() => { 
                setIsHovered(true); //local state
                props.onHoverChange?.(true); //parent state
                }
            }
            onMouseLeave={() => {
                setIsHovered(false);
                props.onHoverChange?.(false);
                }
            }

            onClick={handleClick}
        >
            <Image src={isHovered ? trueSrc : falseSrc} width={400} height={400} alt={"CV"} /> 
        </div>
        </>
    );
}

export default CvButton

//onMouseEnter={document.body.style.backgroundColor = '#f0f0f0'}
        //onMouseLeave={() => document.body.style.backgroundColor = ''}
        //"/ankaFrame.png"