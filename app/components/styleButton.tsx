'use client'

import "./styleButton.css"
import { useRouter } from "next/navigation"

type StyleButtonProps = {
    number: number;
    routerPath: string;
    }

function StyleButton(props: StyleButtonProps) {

    const router = useRouter();

    const handleClick = () => {
        router.push(props.routerPath);
    };

    return(

        <>
        <div className="buttonWrapper" 
             onClick={handleClick}>
            <p>{props.number}</p>            
                
        </div>
        </>
    )

}

export default StyleButton